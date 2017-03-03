import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserSettingsService } from '../core';
import { UserSettings, CityWeatherData } from '../shared';


@Component({
    selector: 'weather-details',
    templateUrl: './weather-details.component.html',
    styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetaildComponent implements OnInit {
    cityWeatherData: CityWeatherData;
    userSettings: UserSettings;

    constructor(
        private route: ActivatedRoute,
        private userSettingsService: UserSettingsService,
    ) {}

    ngOnInit() {
        this.route.data.subscribe((data: {weatherData: CityWeatherData}) => {
            this.cityWeatherData = data.weatherData;
        });

        // subscribe on change userSettings. Returning userSettings object is immutable
        this.userSettingsService.getSettingsObservable().subscribe(
            userSettings => this.userSettings = userSettings
        );
    }
}
