import {Component, ElementRef} from '@angular/core';
import {template} from '../tpl/map.tpl';
import {VARS} from '../../../../vars';

@Component({
    selector: 'map',
    template: template,
})
export class MapComponent  {
    currentPosition: google.maps.LatLng;
    private map: google.maps.Map;

    constructor(
        public element: ElementRef
    ) {
    }

    ngOnInit() {
        setTimeout(() => {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition((position: Position) => {
                        this.map = new google.maps.Map(this.element.nativeElement, VARS.MAP.INIT);
                        this.currentPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                        this.map.setCenter(this.currentPosition);
                    });
                }
            }, 1000
        )
    }
}
