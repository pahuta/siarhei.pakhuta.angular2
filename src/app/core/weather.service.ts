import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';

import { WeatherData, CityWeatherData, Coords, VARS } from '../shared';
import { LocationService } from './location.service';
import { LoggerService } from './logger.service';

@Injectable()
export class WeatherService {

    constructor(
        private http: Http,
        private locationService: LocationService,
        private loggerService: LoggerService
    ) {};

    // returned weather for @cityCount nearby cities
    getCitiesWeather(cityCount: number): Subject<Observable<WeatherData>> {
        let citiesWeatherSubject = new Subject();

        this.locationService.getPosition().subscribe(
            position => {
                citiesWeatherSubject.next(this.getWeatherData(cityCount, position));
            }
        );

        return citiesWeatherSubject;
    }

    // returned weather for @cityName
    getCityWeather(cityName: string): Observable<CityWeatherData> {
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${VARS.weatherConfig.api_key}`;

        return this.http.get(url)
            .map((response: Response) => response.json() as CityWeatherData);
    }

    private getWeatherData(cityCount: number = VARS.weatherConfig.cityCount, position: Coords): Observable<WeatherData> {
        let url = `http://api.openweathermap.org/data/2.5/find?lat=${position.lat}&lon=${position.lng}&cnt=${cityCount}&appid=${VARS.weatherConfig.api_key}`;

        this.loggerService.log(`Get weather data for ${cityCount} cities`);

        // return this.http.get(url)
        //     .catch(err => this.getMockWeather.bind(this))
        //     .map((response: Response) => response.json() as WeatherData);

        return this.getMockWeather()
            .map((response: Response) => response.json() as WeatherData);
    }

    private getMockWeather(): Observable<Response> {
        return this.http.get('./mock/mock-weather.json');
    }

}