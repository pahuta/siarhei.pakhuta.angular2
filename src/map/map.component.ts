import {Component, ElementRef, OnInit} from '@angular/core';
import { VARS } from '../vars';

@Component({
    selector: 'map',
    template: require('./map.component.html'),
    styles: [require('./map.component.scss').toString()]
})
export class MapComponent implements OnInit {
    currentPosition: google.maps.LatLng;
    isLoading: boolean = false;
    private map: google.maps.Map;

    constructor(
        public element: ElementRef
    ) {
    }

    ngOnInit() {
        setTimeout(() => {
            if (navigator.geolocation) {
                this.isLoading = true;
                navigator.geolocation.getCurrentPosition(
                    (position: Position) => {
                        this.map = new google.maps.Map(this.element.nativeElement, VARS.map.init);
                        this.currentPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                        this.map.setCenter(this.currentPosition);
                        this.isLoading = true;
                    },
                    () => {
                        this.isLoading = true;
                    }
                );
            }
        }, 1000);
    }
}
