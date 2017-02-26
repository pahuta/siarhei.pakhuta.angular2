import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';

@Injectable()
export class ProdLoggerService extends LoggerService {
    constructor() {
        super();
        console.log('** USED PROD LOGGER **');
    };

    log(message: string) {}

    logSuccess(message: string) {}

    logError(message: string) {
        super.logError(message);
    }

    protected addTimestamp(message: string): string {
        return super.addTimestamp(message);
    }
}
