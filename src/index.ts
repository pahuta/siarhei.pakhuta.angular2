import {Map} from './app/map';
import {Weather} from './app/weather';
import {WeatherTable} from './app/weather-table';

export class App {
    private static currentPosition: Position;
    private static map: Map;
    private static weatherTable: WeatherTable;

    static init(): void {
        this.defineCurrentPosition()
            .then((currentPosition) => {
                let coords: Coords.LatLng = {
                    latitude: currentPosition.coords.latitude,
                    longitude: currentPosition.coords.longitude
                };

                this.initWeatherTable();

                return Weather.getWeather(coords, 50);
            })
            .then((citiesWeather) => {
                if (citiesWeather) {
                    this.weatherTable.drawWeatherTable(citiesWeather);
                }
            });
    }

    static initMap(): void {
        let mapContainer = document.querySelector('.map-container');

        if (this.currentPosition) {
            this.map = new Map(mapContainer, this.currentPosition);
        } else {
            this.defineCurrentPosition().then(() => this.map = new Map(mapContainer, this.currentPosition));
        }
    }

    private static initWeatherTable(): void {
        let weatherTableContainer = document.querySelector('.weather-table-container');
        this.weatherTable = new WeatherTable(weatherTableContainer);
    }

    private static defineCurrentPosition(): Promise<Position> {
        return new Promise((resolve: Function, reject: Function) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position: Position) => {
                    this.currentPosition = position;
                    resolve(this.currentPosition);
                });
            } else {
                reject();
            }
        });
    }
}

App.init();