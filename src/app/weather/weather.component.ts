import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { WeatherData } from './weather-data.model';
import { VARS } from './vars';
import { Coords, UserSettings, UserSettingsService } from '../shared';

@Component({
    selector: 'weather',
    template: require('./weather.component.html'),
    styles: [require('./weather.component.scss').toString()]
})
export class WeatherComponent implements OnInit {
    @Input() currentPositionPromise: Promise<Coords>;
    @Input() cityCount: number;

    data: Observable<WeatherData>;
    userSettings: UserSettings;
    isOpenFiltersMenu: boolean = false;
    private currentCoords: Coords;
    private regularlyUpdateWeathersIntervalId: number;

    constructor(
        private http: Http,
        private userSettingsService: UserSettingsService
    ) {
        this.cityCount = this.cityCount || VARS.weatherConfig.cityCount;
    }

    ngOnInit() {
        this.currentPositionPromise
            .then((coords: Coords) => {
                this.currentCoords = coords;
                this.updateWeatherData();
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

    private getWeatherData(coords: Coords): Observable<WeatherData> {
        let url = `http://api.openweathermap.org/data/2.5/find?lat=${coords.lat}&lon=${coords.lng}&cnt=${this.cityCount}&appid=${VARS.weatherConfig.api_key}`;

        return this.http.get(url)
            .catch(err => this.getMockWeather.bind(this))
            .map((response: Response) => response.json() as WeatherData);

        // return this.getMockWeather()
        //     .map((response: Response) => response.json() as WeatherData);

    }

    private getMockWeather(): Observable<Response> {
        return this.http.get('./mock/mock-weather.json');
    }

    private updateWeatherData() {
        this.data = this.getWeatherData(this.currentCoords);
    }
}
