import { CityWeatherData } from '../shared'

export class WeatherData {
    cod: string;
    count: number;
    list: CityWeatherData[];
    message: string;
}
