import { Component, OnInit } from '@angular/core';

import { Coords, UserSettingsService, UserSettings } from './shared'

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    styles: [require('./app.component.scss').toString()]
})
export class AppComponent implements OnInit {
    currentPositionPromise: Promise<Coords>;
    currentPosition: Coords = {
        lat: 0,
        lng: 0
    };
    isOpenDisplayModesMenu: boolean = false;
    userSettings: UserSettings;

    constructor(private userSettingsService: UserSettingsService) {}

    ngOnInit() {
        this.currentPositionPromise = new Promise((resolve: Function, reject: Function) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position: Position) => {
                    this.currentPosition = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    resolve(this.currentPosition);
                });
            }
        });

        this.userSettings = this.userSettingsService.getSettings();

        // subscribe on change userSettings. Returning userSettings object is immutable
        this.userSettingsService.getSettingsObservable().subscribe(
            (userSettings) => {
                this.userSettings = userSettings;
            }
        );
    }

    setScale(parameterName: string, scale: string) {
        switch (parameterName) {
            case 'temperature': {
                this.userSettingsService.setSettings('displayModes.temperature', scale);
            }
                break;
            case 'wind': {
                this.userSettingsService.setSettings('displayModes.wind', scale);
            }
                break;
            case 'pressure': {
                this.userSettingsService.setSettings('displayModes.pressure', scale);
            }
                break;
        }

        this.isOpenDisplayModesMenu = false;
    }

    setFilter(filterName: string) {
        this.userSettingsService.setSettings('filter', filterName);
    }

    isCityListEmpty(): boolean {
        return !Object.keys(this.userSettings.cityList).length;
    }
}
