declare module Weather {
    export interface Cities {
        cod: string;
        count: number;
        list: City[];
        message: string;
    }

    export interface City {
        clouds: Clouds;
        coord: Coord;
        dt: number;
        id: number;
        main: Main;
        name: string;
        sys: Sys;
        weather: CityWeather[];
        wind: Wind;
    }

    export interface Wind {
        deg: number;
        speed: number;
    }

    export interface CityWeather {
        description: string;
        icon: string;
        id: number;
        main: string;
    }

    export interface Sys {
        country: string;
    }

    export interface Main {
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    }

    export interface Coord {
        lat: number;
        lon: number;
    }

    export interface Clouds {
        all: number;
    }
}

declare module 'Weather/Interfaces' {
    export default Weather;
}
