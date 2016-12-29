import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { WeatherData } from './weather-data.model';
import { VARS } from './vars';
import { Coords, UserSettings } from '../shared';

@Component({
    selector: 'weather',
    template: require('./weather.component.html'),
})
export class WeatherComponent implements OnInit {
    @Input() currentPositionPromise: Promise<Coords>;
    @Input() cityCount: number;
    @Input() userSettings: UserSettings;

    data: Observable<WeatherData>;
    iconUrl: string;

    constructor(private http: Http) {
        this.iconUrl = VARS.weatherConfig.icon_url;
        this.cityCount = this.cityCount || VARS.weatherConfig.cityCount;
    }

    ngOnInit() {
        this.currentPositionPromise
            .then((coords: Coords) => {
                this.data = this.getWeatherData(coords);
            });
    }

    favoriteCityChange($event: {name: string}) {
        if (this.userSettings.favoriteCity === $event.name) {
            this.userSettings.favoriteCity = '';
        } else {
            this.userSettings.favoriteCity = $event.name;
        }


        this.userSettings = Object.assign({}, this.userSettings);
    }

    private getWeatherData(coords: Coords): Observable<WeatherData> {
        let url = `http://api.openweathermap.org/data/2.5/find?lat=${coords.lat}
                                                              &lon=${coords.lng}&cnt=${this.cityCount}
                                                              &appid=${VARS.weatherConfig.api_key}`;

        return this.http.get(url)
            .catch(this.getMockWeather.bind(this))
            .map((response: Response) => response.json() as WeatherData);

    }

    private getMockWeather(): Observable<Response> {
        return this.http.get('./mock/mock-weather.json');
    }
}
