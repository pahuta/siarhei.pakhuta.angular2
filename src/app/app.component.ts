import { Component, OnInit } from '@angular/core';

import { Coords, UserSettings } from './shared'

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
    userSettings: UserSettings;
    isOpenDisplayModesMenu: boolean = false;

    constructor() {
        this.userSettings = new UserSettings({
            displayModes: {
                temperature: 'c',
                wind: 'km/h',
                pressure: 'mmHg'
            }
        });
    }

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

    }

    setScale(parameterName: string, scale: string) {
        switch (parameterName) {
            case 'temperature': {
                this.userSettings = Object.assign(this.userSettings, {displayModes: {temperature: scale}});
            }
                break;
            case 'wind': {
                this.userSettings = Object.assign(this.userSettings, {displayModes: {wind: scale}});
            }
                break;
            case 'pressure': {
                this.userSettings = Object.assign(this.userSettings, {displayModes: {pressure: scale}});
            }
                break;
        }

        this.isOpenDisplayModesMenu = false;
    }
}
