import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';

import { cityNameReducer } from './city-name.reducer';
import { InitialCustomCityState } from './custom-city-weather.state';
import * as CustomCityActions from './custom-city-weather.actions';

const reducers = {
    customCity: cityNameReducer,
};

const devReducer: ActionReducer<InitialCustomCityState> = compose(combineReducers)(reducers);

export function customCityWeatherReducer(state: InitialCustomCityState, action: CustomCityActions.Actions) {
    return devReducer(state, action);
}
