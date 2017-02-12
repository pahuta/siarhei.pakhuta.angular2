import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { UserSettings } from '../shared';
import * as _ from 'lodash';
import { IUserSettingsParams } from '../shared';
import { StorageService } from './storage.service';

@Injectable()
export class UserSettingsService {
    private userSettings: UserSettings;
    private userSettingsObservable: BehaviorSubject<UserSettings>;
    private onUnstableSubscription: Subject<void>;
    private onStableSubscription: Subject<void>;

    constructor(
        private ngZone: NgZone,
        private storageService: StorageService
    ) {
        this.userSettings = this.storageService.loadUserSettings();
        this.userSettingsObservable =  new BehaviorSubject(this.userSettings);
        this.setProfilingMode(this.userSettings.isRegularlyUpdateWeathers);
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

    getSettingsObservable(): BehaviorSubject<UserSettings> {
        return this.userSettingsObservable;
    }

    setProfilingMode(isProfilingOn: boolean) {
        if (this.userSettings.isRegularlyUpdateWeathers === isProfilingOn) {
            return;
        }

        this.setSettings({'isRegularlyUpdateWeathers': isProfilingOn});

        if (isProfilingOn) {
            // profiling change detection
            this.onUnstableSubscription = this.ngZone.onUnstable.subscribe(() => {
                console.time('changeDetection');
            });
            this.onStableSubscription = this.ngZone.onStable.subscribe(() => {
                console.timeEnd('changeDetection');
            });
        } else if (this.onUnstableSubscription) {
            this.onUnstableSubscription.unsubscribe();
            this.onStableSubscription.unsubscribe();
        }
    }
}

