import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'pressure'})
export class PressurePipe implements PipeTransform {
    transform(pressure: number, params: string = 'mmHg.0'): string {
        let convertedPressure: string;
        let delimiterPosition: number = params.indexOf('.');
        let scale: string = params.slice(0, delimiterPosition);
        let precision: number = Number(params.slice(delimiterPosition + 1));

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