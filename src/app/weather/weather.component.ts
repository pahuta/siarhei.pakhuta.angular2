import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { UserSettingsService, WeatherService } from '../core';
import { UserSettings, WeatherData } from '../shared';

@Component({
    selector: 'weather',
    template: require('./weather.component.html'),
    styles: [require('./weather.component.scss').toString()]
})
export class WeatherComponent implements OnInit {
    @Input() cityCount: number;

    data: Observable<WeatherData>;
    userSettings: UserSettings;
    isOpenFiltersMenu: boolean = false;
    private regularlyUpdateWeathersIntervalId: number;

    constructor(
        private userSettingsService: UserSettingsService,
        private weatherService: WeatherService
    ) {}

    ngOnInit() {
        this.updateWeatherData();

        // subscribe on change userSettings. Returning userSettings object is immutable
        this.userSettingsService.getSettingsObservable().subscribe(
            (userSettings) => {
                this.userSettings = userSettings;

                // set/unset setInterval for regularly update weathers
                if (userSettings.isRegularlyUpdateWeathers) {
                    this.regularlyUpdateWeathersIntervalId = setInterval(this.updateWeatherData.bind(this), 5000);
                } else if (this.regularlyUpdateWeathersIntervalId) {
                    clearInterval(this.regularlyUpdateWeathersIntervalId);
                }
            }
        );
    }

    setFilter(filterName: string) {
        this.userSettingsService.setSettings({'filter': filterName});
        this.isOpenFiltersMenu = false;
    }

    isCityListEmpty(): boolean {
        return !Object.keys(this.userSettings.cityList).length;
    }

    setRegularlyUpdateWeathers(newValue: boolean) {
        this.userSettingsService.setProfilingMode(newValue);
    }

    private updateWeatherData() {
        this.weatherService.getCitiesWeather(this.cityCount).subscribe(
            (dataObservable) => {
                this.data = dataObservable;
            }
        );
    }
}
