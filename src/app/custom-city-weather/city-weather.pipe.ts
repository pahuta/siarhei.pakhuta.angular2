import { Pipe, PipeTransform } from '@angular/core';
import { Http, Response } from '@angular/http';

import * as moment from 'moment';
import { CityWeatherData, VARS } from '../weather';

@Pipe({name: 'cityWeather', pure: false})
export class CityWeatherPipe implements PipeTransform {
    private cacheCitiesWeatherData = {};
    private cityWeatherData: CityWeatherData;
    private cachedCityName: string;

    constructor(private http: Http) {}

    transform(cityName: string): CityWeatherData {
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${VARS.weatherConfig.api_key}`;

        if (cityName && this.cachedCityName !== cityName) {
            this.cachedCityName = cityName;

            if (this.cacheCitiesWeatherData[cityName] && moment().diff(this.cacheCitiesWeatherData[cityName].lastUpdate) < VARS.ttlWeatherCache) {
                this.cityWeatherData = this.cacheCitiesWeatherData[cityName].weather;

            } else {
                this.http.get(url)
                    .map((response: Response) => response.json() as CityWeatherData)
                    .subscribe((data) => {

                        // save weather data to 'cache'
                        this.cacheCitiesWeatherData[cityName] = {
                            lastUpdate: moment(),
                            weather: data
                        };
                        this.cityWeatherData = data;
                    });
            }
        }

        return this.cityWeatherData;
    }
}
