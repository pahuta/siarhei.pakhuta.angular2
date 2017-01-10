import { Component, OnInit } from '@angular/core';
import { UserSettings, UserSettingsService } from '../shared';

@Component({
    selector: 'custom-city-weather',
    template: require('./custom-city-weather.component.html'),
    styles: [require('./custom-city-weather.component.scss').toString()],
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
