import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UserSettings } from '../shared';
import { forEach, set, clone } from 'lodash';
import { IUserSettingsParams } from '../shared';
import { userSettings } from './user-settings.fake';

@Injectable()
export class UserSettingsServiceStub {
    private userSettings: UserSettings;
    private userSettingsObservable: BehaviorSubject<UserSettings>;

    constructor() {
        this.userSettings = userSettings;
        this.userSettingsObservable =  new BehaviorSubject(this.userSettings);
    }

    getSettings() {
        return this.userSettings;
    }

    setSettings(userSettingsParams: IUserSettingsParams) {
        // link on object userSettings saved
        forEach(userSettingsParams, (value, path) => {
            this.userSettings = set(this.userSettings, path, value);
        });
        this.userSettingsObservable.next(clone(this.userSettings));
    }

    getSettingsObservable(): BehaviorSubject<UserSettings> {
        return this.userSettingsObservable;
    }
}

