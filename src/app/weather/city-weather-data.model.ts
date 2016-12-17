import { WeatherCoords, Main, CityWeather, Wind, Sys } from './'

export class CityWeatherData {
    clouds: {all: number};
    coord: WeatherCoords;
    dt: number;
    id: number;
    main: Main;
    name: string;
    sys: Sys;
    weather: CityWeather[];
    wind: Wind;
    base?: string;
    visibility?: number;
    cod?: number;
}
