/// <reference path="./weather.d.ts" />
import {VARS} from './vars';

export class Weather {
    static getWeather(coordinates: Coords.LatLng, citiesCount: number = 1): Promise<Weather.Cities> {
        const url = `http://api.openweathermap.org/data/2.5/find?lat=${coordinates.latitude}
                                                              &lon=${coordinates.longitude}&cnt=${citiesCount}
                                                              &appid=${VARS.WEATHER.API_KEY}`;

        return fetch(url)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
            })
            .then((weatherData: Weather.Cities) => {
                return weatherData;
            });
    }
}
