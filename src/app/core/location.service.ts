import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Coords } from '../shared'

@Injectable()
export class LocationService {
    private position: Coords;

    constructor() {};

    getPosition(): Subject<Coords> {
        let defaultPosition: Coords = {
            lat: 0,
            lng: 0
        };
        let positionSubject =  new Subject();

        if (this.position) {
            // case when position already defined
            positionSubject.next(this.position);
        } else if (navigator.geolocation) {
            // case when browser support Geolocation API
            navigator.geolocation.getCurrentPosition(
                (position: Position) => {
                    this.position = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    positionSubject.next(this.position);
                },
                () => {
                    positionSubject.next(defaultPosition);
                }
            );
        } else {
            // case when browser doesn't support Geolocation API
            positionSubject.next(defaultPosition);
        }

        return positionSubject;
    }
}