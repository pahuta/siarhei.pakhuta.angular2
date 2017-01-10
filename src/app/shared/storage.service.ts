import { Injectable } from '@angular/core';

import { UserSettings } from './user-settings.model';

@Injectable()
export class StorageService {
    constructor() {};

    saveUserSettings(userSettings: UserSettings) {
        localStorage.setItem('userSettings', JSON.stringify(userSettings));
    }

    loadUserSettings(): UserSettings {
        let defaultUserSettings = new UserSettings({
            displayModes: {
                temperature: 'c',
                wind: 'm/s',
                pressure: 'mmHg'
            }
        });
        let userSettings = localStorage.getItem('userSettings');

        return (userSettings) ? (JSON.parse(userSettings)) : (defaultUserSettings) ;
    }
}
