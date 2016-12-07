import {Component, OnInit} from '@angular/core';
import { VARS } from '../vars';

@Component({
    selector: 'map',
    template: require('./map.component.html'),
    styles: [require('./map.component.scss').toString()]
})
export class MapComponent implements OnInit {
    currentPosition: IMapCoords = {
        lat: 0,
        lng: 0
    };
    zoom: number = 10;
    isLoading: boolean = false;

    constructor() {}

    ngOnInit() {
        if (navigator.geolocation) {
            this.isLoading = true;
            navigator.geolocation.getCurrentPosition(
                (position: Position) => {
                    this.currentPosition = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    this.isLoading = false;
                },
                () => {
                    this.isLoading = false;
                }
            );
        }

        this.zoom = VARS.map.init.zoom;
    }
}

interface IMapCoords {
    lat: number;
    lng: number;
}
