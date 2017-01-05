import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs';

import { UserSettings } from './user-settings.model';
import * as _ from 'lodash';

@Injectable()
export class UserSettingsService {
    private userSettings: UserSettings;
    private userSettingsObservable: Observable<UserSettings>;
    private userSettingsObserver: Observer<UserSettings>;

    constructor(private ngZone: NgZone) {
        this.userSettings = new UserSettings({
            displayModes: {
                temperature: 'c',
                wind: 'km/h',
                pressure: 'mmHg'
            }
        });

        this.userSettingsObservable =  new Observable((observer: Observer<UserSettings>) => {
            this.userSettingsObserver = observer;
        });

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

    setSettings(path: string, value: string | {}) {
        // link on object userSettings saved
        this.userSettings = _.set(this.userSettings, path, value);
        this.userSettingsObserver.next(_.clone(this.userSettings));
    }

    getSettingsObservable() {
        return this.userSettingsObservable;
    }
}

