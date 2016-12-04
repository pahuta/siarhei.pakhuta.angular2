/// <reference path="./weather.d.ts" />
import {Component, ElementRef} from '@angular/core';
import {template} from '../tpl/weather.tpl';
import {VARS} from '../../../../vars';

@Component({
    selector: 'weather',
    template: template,
})
export class WeatherComponent  {
    weatherData: Weather.City[];
    weatherIconUrl: string;

    constructor(
        public element: ElementRef
    ) {
    }

    ngOnInit() {
        this.weatherIconUrl = VARS.WEATHER.ICON_URL;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position: Position) => {

                const url = `http://api.openweathermap.org/data/2.5/find?lat=${position.coords.latitude}
                                                              &lon=${position.coords.longitude}&cnt=${50}
                                                              &appid=${VARS.WEATHER.API_KEY}`;

                fetch(url)
                    .then((response) => {
                        if (response.status === 200) {
                            return response.json();
                        }
                    })
                    .then((weatherData: Weather.Cities) => {
                        this.weatherData = weatherData.list;
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
