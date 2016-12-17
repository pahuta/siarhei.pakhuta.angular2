import { WeatherCoords, Main, CityWeather, Wind } from './'

export class CityWeatherData {
    clouds: {all: number};
    coord: WeatherCoords;
    dt: number;
    id: number;
    main: Main;
    name: string;
    sys: {country: string};
    weather: CityWeather[];
    wind: Wind;
}
