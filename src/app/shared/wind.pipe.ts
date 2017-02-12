import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'wind'})
export class WindPipe implements PipeTransform {
    transform(windSpeed: number, params: string = 'm/s.1'): string {
        let convertedWindSpeed: string;
        let scale: string;
        let precision: number;
        let delimiterPosition: number = params.indexOf('.');

        if (delimiterPosition === -1) {
            scale = params;
            precision = 1;
        } else {
            scale = params.slice(0, delimiterPosition);
            precision = Number(params.slice(delimiterPosition + 1));
        }

        switch (scale) {
            case 'km/h': {
                convertedWindSpeed = (windSpeed / 1000 * 3600).toFixed(precision) + ' km/h';
            }
                break;
            case 'm/s':
            default: {
                convertedWindSpeed = windSpeed.toFixed(precision) + ' m/s';
            }
        }

        return convertedWindSpeed;
    }
}