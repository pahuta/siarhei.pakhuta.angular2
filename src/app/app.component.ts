import { Component, OnInit } from '@angular/core';

import { Coords } from './shared'

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

    constructor() {}

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
}
