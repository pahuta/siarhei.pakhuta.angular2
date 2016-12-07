export abstract class WeatherData implements IWeatherData{
    abstract cod: string;
    abstract count: number;
    abstract list: CityWeatherData[];
    abstract message: string;
}

export abstract class CityWeatherData implements ICityWeatherData{
    abstract clouds: {all: number};
    abstract coord: ICoord;
    abstract dt: number;
    abstract id: number;
    abstract main: IMain;
    abstract name: string;
    abstract sys: {country: string};
    abstract weather: ICityWeather[];
    abstract wind: IWind;
}

interface IWeatherData {
    cod: string;
    count: number;
    list: ICityWeatherData[];
    message: string;
}

interface ICityWeatherData {
    clouds: {all: number};
    coord: ICoord;
    dt: number;
    id: number;
    main: IMain;
    name: string;
    sys: {country: string};
    weather: ICityWeather[];
    wind: IWind;
}

interface ICoord {
    lat: number;
    lon: number;
}

interface IMain {
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
}

interface ICityWeather {
    description: string;
    icon: string;
    id: number;
    main: string;
}

interface IWind {
    deg: number;
    speed: number;
}

