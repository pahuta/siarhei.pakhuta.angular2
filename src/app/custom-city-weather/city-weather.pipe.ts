import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';
import { VARS, CityWeatherData } from '../shared';
import { WeatherService } from '../core';

@Pipe({name: 'cityWeather', pure: false})
export class CityWeatherPipe implements PipeTransform {
    private cacheCitiesWeatherData = {};
    private cityWeatherData: CityWeatherData;
    private cachedCityName: string;

    constructor(private weatherService: WeatherService) {}

    transform(cityName: string): CityWeatherData {
        if (cityName && this.cachedCityName !== cityName) {
            this.cachedCityName = cityName;

            if (this.cacheCitiesWeatherData[cityName] && moment().diff(this.cacheCitiesWeatherData[cityName].lastUpdate) < VARS.ttlWeatherCache) {
                this.cityWeatherData = this.cacheCitiesWeatherData[cityName].weather;
            } else {
                this.weatherService.getCityWeather(cityName)
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
