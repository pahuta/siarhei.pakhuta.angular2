import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';

import * as WeatherAction from '../weather/weather.actions';
import { weatherDataReducer, InitialWeatherState } from '../weather';
import { cityNameReducer, InitialCustomCityState } from '../custom-city-weather';
import * as CustomCityActions from '../custom-city-weather/custom-city-weather.actions';

const reducers = {
    weatherData: weatherDataReducer,
    customCity: cityNameReducer
};

const devReducer: ActionReducer<InitialWeatherState | InitialCustomCityState> = compose(combineReducers)(reducers);

export function reducer(state: InitialWeatherState | InitialCustomCityState, action: WeatherAction.Actions | CustomCityActions.Actions) {
    return devReducer(state, action);
}
