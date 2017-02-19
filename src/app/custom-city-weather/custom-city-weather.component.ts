import { Component, OnInit } from '@angular/core';

import { UserSettingsService } from '../core';
import { UserSettings } from '../shared';

@Component({
    selector: 'custom-city-weather',
    templateUrl: './custom-city-weather.component.html',
    styleUrls: ['./custom-city-weather.component.scss']
})
export class CustomCityWeatherComponent implements OnInit {
    cityName: string;
    cityNameInput: string;
    userSettings: UserSettings;

    constructor(private userSettingsService: UserSettingsService) {}

    ngOnInit() {
        // subscribe on change userSettings. Returning userSettings object is immutable
        this.userSettingsService.getSettingsObservable().subscribe(
            (userSettings) => {
                this.userSettings = userSettings;
            }
        );
    }

    getCityWeatherData(): void {
        this.cityName = this.cityNameInput;
        this.cityNameInput = '';
    }
}
