import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Coords } from '../shared'
import { LoggerService } from './logger.service';

@Injectable()
export class LocationService {
    private position: Coords;

    constructor(private loggerService: LoggerService) {};

    getPosition(): Subject<Coords> {
        let self = this;
        let defaultPosition: Coords = {
            lat: 0,
            lng: 0
        };
        let positionSubject = new Subject();

        if (this.position) {
            // case when position already defined
            setTimeout(function () {
                positionSubject.next(self.position);
            }, 0)
        } else if (navigator.geolocation) {
            // case when browser support Geolocation API
            navigator.geolocation.getCurrentPosition(
                (position: Position) => {
                    this.loggerService.logSuccess('Location data received');

                    this.position = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    positionSubject.next(this.position);
                },
                () => {
                    this.loggerService.logError(`Location data didn't receive. Browser: ${navigator.appVersion}`);
                    positionSubject.next(defaultPosition);
                }
            );
        } else {
            this.loggerService.logError(`Browser doesn\'t support Geolocation API. Browser: ${navigator.appVersion}`);

            // case when browser doesn't support Geolocation API
            positionSubject.next(defaultPosition);
        }

        return positionSubject;
    }
}