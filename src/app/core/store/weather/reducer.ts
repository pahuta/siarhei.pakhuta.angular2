import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';

import * as WeatherAction from './weather.actions';
import { weatherDataReducer } from './weather.reducer';
import { InitialWeatherState } from './weather.state';

const reducers = {
    weatherData: weatherDataReducer,
};

const devReducer: ActionReducer<InitialWeatherState> = compose(combineReducers)(reducers);

export function weatherReducer(state: InitialWeatherState, action: WeatherAction.Actions) {
    return devReducer(state, action);
}
