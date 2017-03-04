import { RequestOptions } from '@angular/http';
import { DefaultRequestOptions } from './default-request-options.service';

export let RequestOptionsProvider = {
    provide: RequestOptions,
    useClass: DefaultRequestOptions
};
