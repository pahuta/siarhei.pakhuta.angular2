import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { Coords } from '../shared';
import { LocationService } from '../core';

@Component({
    selector: 'map',
    template: require('./map.component.html'),
    styles: [require('./map.component.scss').toString()]
})
export class MapComponent implements OnInit {
    isLoading: boolean = false;
    currentPosition: Subject<Coords>;

    @Input() zoom: number;

    constructor(private locationService: LocationService) {
        this.zoom = this.zoom || 10;
    }

    ngOnInit() {
        this.currentPosition = this.locationService.getPosition();
    }
}
