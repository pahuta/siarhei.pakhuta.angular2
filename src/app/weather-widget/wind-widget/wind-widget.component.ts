import { Component, Input } from '@angular/core';

import { UserSettings, Wind } from '../../shared';

@Component({
    selector: 'wind-widget',
    template: require('./wind-widget.component.html'),
    styles: [require('./wind-widget.component.scss').toString()]
})
export class WindWidgetComponent  {
    @Input() windData: Wind;
    @Input() userSettings: UserSettings;

    constructor() {}
}
