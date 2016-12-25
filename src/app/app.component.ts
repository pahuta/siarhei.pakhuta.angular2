import { Component, OnInit } from '@angular/core';

import { Coords, AppOptions } from './shared'

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
    appOptions: AppOptions;
    isOpenDisplayModesMenu: boolean = false;

    constructor() {}

    ngOnInit() {
        this.appOptions = new AppOptions({
            displayModes: {
                temperature: 'c',
                wind: 'km/h',
                pressure: 'mmHg'
            }
        });

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
                this.appOptions.displayModes.temperature = scale;
            }
                break;
            case 'wind': {
                this.appOptions.displayModes.wind = scale;
            }
                break;
            case 'pressure': {
                this.appOptions.displayModes.pressure = scale;
            }
                break;
        }

        this.isOpenDisplayModesMenu = false;
    }
}
