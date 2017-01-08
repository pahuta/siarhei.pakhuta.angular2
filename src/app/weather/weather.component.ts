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
})
export class WeatherComponent implements OnInit {
    @Input() currentPositionPromise: Promise<Coords>;
    @Input() cityCount: number;

    data: Observable<WeatherData>;
    userSettings: UserSettings;
    private currentCoords: Coords;

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
                // setInterval(this.updateWeatherData.bind(this), 5000);
            });

        this.userSettings = this.userSettingsService.getSettings();

        // subscribe on change userSettings. Returning userSettings object is immutable
        this.userSettingsService.getSettingsObservable().subscribe(
            (userSettings) => {
                this.userSettings = userSettings;
            }
        );
    }

    private getWeatherData(coords: Coords): Observable<WeatherData> {
        let url = `http://api.openweathermap.org/data/2.5/find?lat=${coords.lat}&lon=${coords.lng}&cnt=${this.cityCount}&appid=${VARS.weatherConfig.api_key}`;

        return this.http.get(url)
            .catch(this.getMockWeather.bind(this))
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
