import { Injectable } from '@angular/core';
import { BaseRequestOptions, URLSearchParams, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { VARS } from '../shared';
import { isNull } from 'lodash';

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {

    constructor() {
        super();
        this.headers.set('Content-Type', 'text/plain; charset=utf-8');
    };

    merge(options?: RequestOptionsArgs): RequestOptions {
        let requestOptions = super.merge(options);

        if (isNull(requestOptions.search)) {
            requestOptions.search = new URLSearchParams();
        }

        console.dir(requestOptions);
        if (requestOptions.url.indexOf(VARS.weatherConfig.cityWeatherUrl) === 0) {
            requestOptions.search.append('appid', VARS.weatherConfig.api_key);
        }

        return requestOptions;
    }
}
