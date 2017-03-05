import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Store} from '@ngrx/store';
import { Subscription } from 'rxjs';

import { UserSettingsService } from '../core';
import { UserSettings } from '../shared';
import { InitialCustomCityState, CustomCityState } from '../core/store/custom-city-weather';
import * as CustomCityActions from '../core/store/custom-city-weather/custom-city-weather.actions';

@Component({
    selector: 'custom-city-weather',
    templateUrl: './custom-city-weather.component.html',
    styleUrls: ['./custom-city-weather.component.scss']
})
export class CustomCityWeatherComponent implements OnInit, OnDestroy  {
    cityNameValue: string;
    cityNameInput: string;
    userSettings: UserSettings;
    errorMessage = {
        invalidFirstCapitalLatter: 'City name must begin with a capital letter',
        invalidOnlyLatterAndSpace: 'The city\'s name can contain only Latin letters and space',
        invalidLength: `Too short length`
    };

    private subscription: Subscription;

    constructor(
        private userSettingsService: UserSettingsService,
        private store: Store<InitialCustomCityState>
    ) {}

    ngOnInit() {
        // subscribe on change customCity.name
        this.subscription = this.store
            .select((s: InitialCustomCityState) => s.customCity)
            .subscribe(({name}: CustomCityState): void => {
                this.cityNameValue = name;
            });

        // subscribe on change userSettings. Returning userSettings object is immutable
        this.userSettingsService.getSettingsObservable().subscribe(
            (userSettings) => {
                this.userSettings = userSettings;
            }
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    getCityWeatherData(input: FormControl): void {
        this.store.dispatch(new CustomCityActions.SetCityNameAction(input.value));
        input.reset();
    }
}
