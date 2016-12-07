import { Component, Input } from '@angular/core';
import { VARS } from '../vars';
import { ICoords } from '../app/app.component';

@Component({
    selector: 'map',
    template: require('./map.component.html'),
    styles: [require('./map.component.scss').toString()]
})
export class MapComponent {
    isLoading: boolean = false;

    @Input() currentPosition: ICoords;
    @Input() zoom: number;

    constructor() {
        this.zoom = this.zoom || VARS.map.init.zoom;
    }
}
