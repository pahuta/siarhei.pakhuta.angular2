import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, OnInit } from '@angular/core';

import { CityWeatherData, VARS } from '../weather';
import { UserSettings } from '../shared';

@Component({
    selector: 'weather-widget',
    template: require('./weather-widget.component.html'),
    styles: [require('./weather-widget.component.scss').toString()],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherWidgetComponent implements OnInit  {
    @Input() cityWeatherData: CityWeatherData;
    @Input() userSettings: UserSettings;
    @Input() hideControls: boolean;
    @Output() favoriteCityChange = new EventEmitter();

    iconUrl: string;

    constructor() {}

    ngOnInit() {
        this.iconUrl = VARS.weatherConfig.icon_url;
    }

    setFavoriteCity(cityName: string) {
        this.favoriteCityChange.emit({
            name: cityName
        });
    }
}
