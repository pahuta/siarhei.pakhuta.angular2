import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'temperature'})
export class TemperaturePipe implements PipeTransform {
    transform(temperatureK: number, params: string = 'c.0'): string {
        let convertedTemperature: string;
        let delimiterPosition: number = params.indexOf('.');
        let scale: string = params.slice(0, delimiterPosition);
        let precision: number = Number(params.slice(delimiterPosition + 1));

        switch (scale) {
            case 'k': {
                convertedTemperature = temperatureK.toFixed(precision) + ' K';
            }
                break;
            case 'f': {
                convertedTemperature = (1.8 * (temperatureK - 273.15) + 32).toFixed(precision) + ' °F';
            }
                break;
            case 'c':
            default: {
                convertedTemperature = (temperatureK - 273.15).toFixed(precision) + ' °C';
            }
        }

        return convertedTemperature;
    }
}