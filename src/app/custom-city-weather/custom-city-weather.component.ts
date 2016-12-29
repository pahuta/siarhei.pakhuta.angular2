import { Component, Input } from '@angular/core';
import { UserSettings } from '../shared/user-settings.model';

@Component({
    selector: 'custom-city-weather',
    template: require('./custom-city-weather.component.html'),
    styles: [require('./custom-city-weather.component.scss').toString()],
})
export class CustomCityWeatherComponent {
    @Input() userSettings: UserSettings;

    cityName: string;

    constructor() {}

    getCityWeatherData(cityName: string): void {
        this.cityName = cityName;
    }

    favoriteCityChange($event: {name: string}) {
        this.userSettings.favoriteCity = $event.name;
        this.userSettings = Object.assign({}, this.userSettings);
    }
}
