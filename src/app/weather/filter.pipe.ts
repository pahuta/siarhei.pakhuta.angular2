import { Pipe, PipeTransform } from '@angular/core';

import { CityWeatherData } from './city-weather-data.model';
import { UserSettingsService, UserSettings } from '../shared';
import * as _ from 'lodash';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
    constructor(private userSettingsService: UserSettingsService) {}

    transform(citiesWeatherData: CityWeatherData[], filterBy: string): CityWeatherData[] {
        let filteredCityWeatherData: CityWeatherData[];
        let userSettings: UserSettings = this.userSettingsService.getSettings();

        switch (filterBy) {
            case 'favorite': {
                filteredCityWeatherData = _.filter(citiesWeatherData, (cityWeatherData: CityWeatherData) => {
                    return cityWeatherData.name === userSettings.favoriteCity;
                });
            }
                break;
            case 'list': {
                filteredCityWeatherData = _.filter(citiesWeatherData, (cityWeatherData: CityWeatherData) => {
                    return cityWeatherData.name in userSettings.cityList;
                });
            }
                break;
            default: {
                filteredCityWeatherData = citiesWeatherData;
            }
        }

        return filteredCityWeatherData
    }
}