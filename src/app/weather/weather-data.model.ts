import { CityWeatherData } from './city-weather-data.model'

export class WeatherData {
    cod: string;
    count: number;
    list: CityWeatherData[];
    message: string;
}
