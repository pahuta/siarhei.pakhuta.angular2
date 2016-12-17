import { CityWeatherData } from './'

export class WeatherData {
    cod: string;
    count: number;
    list: CityWeatherData[];
    message: string;
}
