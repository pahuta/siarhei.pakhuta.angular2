import { WeatherCoords } from './weather-coords.model'
import { Main } from './main.model'
import { CityWeather } from './city-weather.model'
import { Wind } from './wind.model'
import { Sys } from './sys.model'

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
