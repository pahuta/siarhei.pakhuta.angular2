import { LoggerService } from './logger.service';
import { ProdLoggerService } from './prod-logger.service';

export function loggerFactory() {
    return (process.env.NODE_ENV === 'production') ? (new ProdLoggerService()) : (new LoggerService());
}
