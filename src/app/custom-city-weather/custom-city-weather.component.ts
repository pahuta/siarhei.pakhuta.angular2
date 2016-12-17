import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { VARS } from '../weather';
import { CityWeatherData } from '../weather';

@Component({
    selector: 'custom-city-weather',
    template: require('./custom-city-weather.component.html'),
    styles: [require('./custom-city-weather.component.scss').toString()],
})
export class CustomCityWeatherComponent{
    isDataNeverLoaded: boolean = true;
    isLoading: boolean = false;
    cityWeatherData: CityWeatherData;

    constructor(private http: Http) {}

    getCityWeatherData(cityName: string): void {
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${VARS.weatherConfig.api_key}`;

        this.isDataNeverLoaded = false;
        this.cityWeatherData = null;
        this.isLoading = true;
        this.http.get(url)
            .map((response: Response) => response.json() as CityWeatherData)
            .subscribe(
                (data: CityWeatherData) => {
                    if (data && data.cod === 200) {
                        this.cityWeatherData = data;
                    }
                    this.isLoading = false;
                },
                () => {
                    this.isLoading = false;
                }
            );
    }
}
