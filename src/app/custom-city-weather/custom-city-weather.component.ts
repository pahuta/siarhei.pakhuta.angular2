import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { UserSettingsService } from '../core';
import { UserSettings } from '../shared';

@Component({
    selector: 'custom-city-weather',
    templateUrl: './custom-city-weather.component.html',
    styleUrls: ['./custom-city-weather.component.scss']
})
export class CustomCityWeatherComponent implements OnInit {
    cityNameValue: string;
    cityNameInput: string;
    userSettings: UserSettings;
    errorMessage = {
        invalidFirstCapitalLatter: 'City name must begin with a capital letter',
        invalidOnlyLatterAndSpace: 'The city\'s name can contain only Latin letters and space',
        invalidLength: `Too short length`
    };

    constructor(private userSettingsService: UserSettingsService) {}

    ngOnInit() {
        // subscribe on change userSettings. Returning userSettings object is immutable
        this.userSettingsService.getSettingsObservable().subscribe(
            (userSettings) => {
                this.userSettings = userSettings;
            }
        );
    }

    getCityWeatherData(input: FormControl): void {
        this.cityNameValue = input.value;
        input.reset();
    }
}
