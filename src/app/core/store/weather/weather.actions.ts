import { Action } from '@ngrx/store';

import { WeatherData } from '../../../shared';

export const ActionTypes = {
    GET_WEATHER_REMOTELY: '[WEATHER] GET_WEATHER_REMOTELY',
    GET_WEATHER: '[WEATHER] GET_WEATHER',
};

export class GetWeatherRemotelyAction implements Action {
    type = ActionTypes.GET_WEATHER_REMOTELY;

    constructor(public payload: number) {}
}

export class GetWeatherAction implements Action {
    type = ActionTypes.GET_WEATHER;

    constructor(public payload: WeatherData) {}
}

export type Actions = GetWeatherAction | GetWeatherRemotelyAction;
