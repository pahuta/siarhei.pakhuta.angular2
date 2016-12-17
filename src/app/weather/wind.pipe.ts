import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'wind'})
export class WindPipe implements PipeTransform {
    transform(windSpeed: number, params: string = 'm/s.1'): string {
        let convertedWindSpeed: string;
        let delimiterPosition: number = params.indexOf('.');
        let scale: string = params.slice(0, delimiterPosition);
        let precision: number = Number(params.slice(delimiterPosition + 1));

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