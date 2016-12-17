import { Component } from '@angular/core';

@Component({
    selector: 'custom-city-weather',
    template: require('./custom-city-weather.component.html'),
    styles: [require('./custom-city-weather.component.scss').toString()],
})
export class CustomCityWeatherComponent {
    cityName: string;

    constructor() {}

    getCityWeatherData(cityName: string): void {
        this.cityName = cityName;
    }
}
