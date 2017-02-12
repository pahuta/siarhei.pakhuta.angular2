import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'pressure'})
export class PressurePipe implements PipeTransform {
    transform(pressure: number, params: string = 'mmHg.0'): string {
        let convertedPressure: string;
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
            case 'hpa': {
                convertedPressure = pressure.toFixed(precision) + ' hpa';
            }
                break;
            case 'mmHg':
            default: {
                convertedPressure = (pressure * 0.75006375541921).toFixed(precision) + ' mmHg';
            }
        }

        return convertedPressure;
    }
}