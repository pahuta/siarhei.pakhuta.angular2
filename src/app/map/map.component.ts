import { Component, Input } from '@angular/core';

import { Coords } from '../shared';

@Component({
    selector: 'map',
    template: require('./map.component.html'),
    styles: [require('./map.component.scss').toString()]
})
export class MapComponent {
    isLoading: boolean = false;

    @Input() currentPosition: Coords;
    @Input() zoom: number;

    constructor() {
        this.zoom = this.zoom || 10;
    }
}
