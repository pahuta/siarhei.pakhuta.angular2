import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { WeatherData } from './';
import { VARS } from './';
import { Coords } from '../shared';

@Component({
    selector: 'weather',
    template: require('./weather.component.html'),
})
export class WeatherComponent implements OnInit {
    data: Observable<WeatherData>;
    iconUrl: string;

    @Input() currentPositionPromise: Promise<Coords>;
    @Input() cityCount: number;

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
