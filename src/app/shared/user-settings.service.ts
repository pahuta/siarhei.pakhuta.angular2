import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UserSettings } from './user-settings.model';
import * as _ from 'lodash';
import { IUserSettingsParams } from './user-settings-params.model';
import { StorageService } from './storage.service';

@Injectable()
export class UserSettingsService {
    private userSettings: UserSettings;
    private userSettingsObservable: BehaviorSubject<UserSettings>;

    constructor(
        private ngZone: NgZone,
        private storageService: StorageService
    ) {
        this.userSettings = this.storageService.loadUserSettings();
        this.userSettingsObservable =  new BehaviorSubject(this.userSettings);

        // profiling change detection
        this.ngZone.onUnstable.subscribe(() => {
            console.time('changeDetection');
        });

        this.ngZone.onStable.subscribe(() => {
            console.timeEnd('changeDetection');
        });
    }

    getSettings() {
        return this.userSettings;
    }

    setSettings(userSettingsParams: IUserSettingsParams) {
        // link on object userSettings saved
        _.forEach(userSettingsParams, (value, path) => {
            this.userSettings = _.set(this.userSettings, path, value);
        });
        this.storageService.saveUserSettings(this.userSettings);
        this.userSettingsObservable.next(_.clone(this.userSettings));
    }

    getSettingsObservable() {
        return this.userSettingsObservable;
    }
}

