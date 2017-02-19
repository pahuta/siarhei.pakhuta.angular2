import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { UserSettings, CityWeatherData, VARS } from '../shared';
import { UserSettingsService } from '../core';

@Component({
    selector: 'weather-widget',
    templateUrl: './weather-widget.component.html',
    styleUrls: ['./weather-widget.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherWidgetComponent implements OnInit  {
    @Input() cityWeatherData: CityWeatherData;
    @Input() userSettings: UserSettings;
    @Input() hideControls: boolean;

    iconUrl: string;

    constructor(private userSettingsService: UserSettingsService) {}

    ngOnInit() {
        this.iconUrl = VARS.weatherConfig.icon_url;
    }

    setFavoriteCity(cityName: string) {
        if (this.userSettings.favoriteCity === cityName) {
            // make this city not elected
            this.userSettingsService.setSettings({'favoriteCity': ''});
        } else {
            this.userSettingsService.setSettings({'favoriteCity': cityName});
        }
    }

    addCityToList(cityName: string) {
        let userSettings = this.userSettingsService.getSettings();
        userSettings.cityList[cityName] = null;
        this.userSettingsService.setSettings({'cityList': userSettings.cityList});
    }

    removeCityFromList(cityName: string) {
        let userSettings = this.userSettingsService.getSettings();
        delete userSettings.cityList[cityName];
        this.userSettingsService.setSettings({'cityList': userSettings.cityList});
    }

    isCityInList(cityName: string): boolean {
        return cityName in this.userSettings.cityList;
    }
}
