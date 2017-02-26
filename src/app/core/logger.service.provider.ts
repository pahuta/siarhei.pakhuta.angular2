import { LoggerService } from './logger.service';
import { loggerFactory } from './logger.service.factory';

export let loggerServiceProvider = {
    provide: LoggerService,
    useFactory: loggerFactory
};
