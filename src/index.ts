import {Map} from './app/map';
import {Weather} from './app/weather';
import {WeatherTable} from './app/weatherTable';

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

                this.initMap();
                this.initweatherTable();

                return Weather.getWeather(coords, 50);
            })
            .then((citiesWeather) => {
                this.weatherTable.drawWeatherTable(citiesWeather);
            });
    }

    private static initMap(): void {
        let mapContainer = document.querySelector('.map-container');
        this.map = new Map(mapContainer, this.currentPosition);
    }

    private static initweatherTable(): void {
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