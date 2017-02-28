import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { UserSettingsService, WeatherService } from '../core';
import { UserSettings, WeatherData } from '../shared';

@Component({
    selector: 'weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
    @Input() cityCount: number;

    data: Observable<WeatherData>;
    userSettings: UserSettings;
    isOpenFiltersMenu: boolean = false;
    visibleOptions = {};
    visibleOptionsItems = {
        humidity: {
            caption: 'Humidity',
            name: 'humidity',
            checked: false
        },
        wind: {
            caption: 'Wind',
            name: 'wind',
            checked: false
        },
        pressure: {
            caption: 'Pressure',
            name: 'pressure',
            checked: false
        }
    };

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
