import {Component, OnInit} from '@angular/core';
import {WeatherData, CityWeatherData} from './weather.model';
import { VARS } from '../vars';

@Component({
    selector: 'weather',
    template: require('./weather.component.html'),
    styles: [require('./weather.component.scss').toString()],
})
export class WeatherComponent implements OnInit {
    data: CityWeatherData[];
    iconUrl: string;
    isLoading: boolean = false;

    constructor() {}

    ngOnInit() {
        this.iconUrl = VARS.weather.icon_url;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position: Position) => {

                let url = `http://api.openweathermap.org/data/2.5/find?lat=${position.coords.latitude}
                                                              &lon=${position.coords.longitude}&cnt=${50}
                                                              &appid=${VARS.weather.api_key}`;

                this.isLoading = true;
                fetch(url)
                    .then((response) => {
                        if (response.status === 200) {
                            return response.json();
                        } else {
                            return JSON.parse(VARS.weather.mock);
                        }
                    })
                    .catch(() => {
                        return JSON.parse(VARS.weather.mock);
                    })
                    .then((data: WeatherData) => {
                        if (data && data.list) {
                            this.data = data.list;
                        }
                        this.isLoading = false;
                    });
            });
        }
    }

    convertTemperature(temperature: number, targetScale: string = 'C', precision: number = 0): string {
        let convertedTemperature: string;

        switch (targetScale) {
            case 'C': {
                convertedTemperature = (temperature - 273).toFixed(precision) + ' °C';
            }
                break;
            case 'K':
            default: {
                convertedTemperature = temperature.toFixed(precision) + ' K';
            }
        }

        return convertedTemperature;
    }

    convertWind(windSpeed: number, targetScale: string = 'm/s', precision: number = 1): string {
        let convertedWind: string;

        switch (targetScale) {
            case 'm/s':
            default: {
                convertedWind = windSpeed.toFixed(precision) + ' m/s';
            }
        }

        return convertedWind;
    }

    convertPressure(pressure: number, targetScale: string = 'hpa', precision: number = 2): string {
        let convertedPressure: string;

        switch (targetScale) {
            case 'hpa':
            default: {
                convertedPressure = pressure.toFixed(precision) + ' hpa';
            }
        }

        return convertedPressure;
    }
}
