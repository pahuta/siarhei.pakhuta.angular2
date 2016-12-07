import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    styles: [require('./app.component.scss').toString()]
})
export class AppComponent implements OnInit {
    currentPosition: ICoords = {
        lat: 0,
        lng: 0
    };

    constructor() {}

    ngOnInit() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position: Position) => {
                this.currentPosition = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
            });
        }
    }
}

export interface ICoords {
    lat: number;
    lng: number;
}