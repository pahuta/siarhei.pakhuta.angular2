import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { UserSettingsService } from '../core';
import { UserSettings, WeatherData, CityWeatherData } from '../shared';
import { InitialWeatherState } from '../core/store/weather/weather.state';
import * as WeatherAction from '../core/store/weather/weather.actions';

@Component({
    selector: 'weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {
    @Input() cityCount: number;

    data: CityWeatherData[];
    userSettings: UserSettings;
    isOpenFiltersMenu: boolean = false;

    private regularlyUpdateWeathersIntervalId: number;
    private subscription: Subscription;

    constructor(
        private userSettingsService: UserSettingsService,
        private store: Store<InitialWeatherState>
    ) {}

    ngOnInit() {
        this.updateWeatherData();

        // subscribe on change customCity.name
        this.subscription = this.store
            .select((s: InitialWeatherState) => s.weatherData)
            .subscribe((data: WeatherData): void => {
                this.data = data.list;
            });

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

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    setFilter(filterName: string) {
        this.userSettingsService.setSettings({'filter': filterName});
        this.isOpenFiltersMenu = false;
    }

    saveSettings() {
        this.userSettingsService.setSettings({'visibleOptionsItems': this.userSettings.visibleOptionsItems});
    }

    isCityListEmpty(): boolean {
        return !Object.keys(this.userSettings.cityList).length;
    }

    setRegularlyUpdateWeathers(newValue: boolean) {
        this.userSettingsService.setProfilingMode(newValue);
    }

    private updateWeatherData() {
        this.store.dispatch(new WeatherAction.GetWeatherRemotelyAction(this.cityCount));
    }
}
