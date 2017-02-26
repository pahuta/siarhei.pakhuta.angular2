import { Pipe, PipeTransform } from '@angular/core';

import { CityWeatherData, UserSettings } from '../shared';
import * as _ from 'lodash';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
    constructor() {}

    transform(citiesWeatherData: CityWeatherData[], userSettings: UserSettings): CityWeatherData[] {
        let filteredCityWeatherData: CityWeatherData[];

        switch (userSettings.filter) {
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