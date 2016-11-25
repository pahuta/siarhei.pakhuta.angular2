import {vars} from './vars';

export class WeatherTable {
    constructor (private weatherTableContainer: Element) {}

    drawWeatherTable(weatherData: Weather.Cities): void {
        this.weatherTableContainer.innerHTML = '';

        for (let i = 0; i < weatherData.list.length; i++) {
            let cityWeatherElement = this.createCityWeatherElement(weatherData.list[i]);
            this.weatherTableContainer.appendChild(cityWeatherElement);
        }
    }

    private createCityWeatherElement(weatherCity: Weather.City): Element {
        let div = document.createElement('div');
        div.classList.add('city-weather');

        div.innerHTML = `
            <div class="city-name">${weatherCity.name}</div>
            <div class="weather-icon">
                <img class="icon" src="${vars.weather.iconUrl + weatherCity.weather[0].icon}.png">
            </div>
            <div class="weather-data">
                <div class="temperature">${WeatherTable.convertTemperature(weatherCity.main.temp)}</div>
                <div class="humidity">${weatherCity.main.humidity}%</div>
                <div class="wind">${WeatherTable.convertWind(weatherCity.wind.speed)}</div>
                <div class="pressure">${WeatherTable.convertPressure(weatherCity.main.pressure)}</div>        
            </div>
        `;

        return div;
    }

    private static convertTemperature(temperature: number, targetScale: string = 'C', precision: number = 0): string {
        let convertedTemperature: string;

        switch (targetScale) {
            case 'C': {
                convertedTemperature = (temperature - 273).toFixed(precision) + ' °C';
            }
            break;
            case 'K':
            default: {
                convertedTemperature = temperature.toFixed(precision) + ' K';
            }
        }

        return convertedTemperature;
    }

    private static convertWind(windSpeed: number, targetScale: string = 'm/s', precision: number = 1): string {
        let convertedWind: string;

        switch (targetScale) {
            case 'm/s':
            default: {
                convertedWind = windSpeed.toFixed(precision) + ' m/s';
            }
        }

        return convertedWind;
    }

    private static convertPressure(pressure: number, targetScale: string = 'hpa', precision: number = 2): string {
        let convertedPressure: string;

        switch (targetScale) {
            case 'hpa':
            default: {
                convertedPressure = pressure.toFixed(precision) + ' hpa';
            }
        }

        return convertedPressure;
    }
}