import { Component, Input } from '@angular/core';

import { CityWeatherData, VARS } from '../weather';
import { DisplayModes } from '../shared';

@Component({
    selector: 'weather-widget',
    template: require('./weather-widget.component.html'),
    styles: [require('./weather-widget.component.scss').toString()],
})
export class WeatherWidgetComponent {
    iconUrl: string;

    @Input() cityWeatherData: CityWeatherData;
    @Input() displayModes: DisplayModes;

    constructor() {
        this.iconUrl = VARS.weatherConfig.icon_url;
    }
}
