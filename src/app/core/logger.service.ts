import { Injectable } from '@angular/core';

import * as moment from 'moment';

@Injectable()
export class LoggerService {
    private successStyle = `color : green`;
    private errorStyle = `color : red`;
    private normalStyle = `color : blue`;

    constructor() {};

    log(message: string) {
        console.log(`%c${this.addTimestamp(message)}`, this.normalStyle);
    }

    logSuccess(message: string) {
        console.log(`%c${this.addTimestamp(message)}`, this.successStyle);
    }

    logError(message: string) {
        console.log(`%c${this.addTimestamp(message)}`, this.errorStyle);
    }

    private addTimestamp(message: string): string {
        return `${moment().format('DD.MM.YYYY HH:mm:ss')} ${message}`;
    }
}
