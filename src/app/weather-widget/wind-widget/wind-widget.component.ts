import { Component, Input } from '@angular/core';

import { UserSettings, Wind } from '../../shared';

@Component({
    selector: 'wind-widget',
    templateUrl: './wind-widget.component.html',
    styleUrls: ['./wind-widget.component.scss']
})
export class WindWidgetComponent  {
    @Input() windData: Wind;
    @Input() userSettings: UserSettings;

    constructor() {}
}
