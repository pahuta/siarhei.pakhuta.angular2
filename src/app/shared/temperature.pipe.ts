import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'temperature'})
export class TemperaturePipe implements PipeTransform {
    transform(temperatureK: number, params: string = 'c.0'): string {
        let convertedTemperature: string;
        let scale: string;
        let precision: number;
        let delimiterPosition: number = params.indexOf('.');

        if (delimiterPosition === -1) {
            scale = params;
            precision = 0;
        } else {
            scale = params.slice(0, delimiterPosition);
            precision = Number(params.slice(delimiterPosition + 1));
        }

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