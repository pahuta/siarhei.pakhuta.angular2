import { initialWeatherState } from './weather.state';
import * as WeatherAction from './weather.actions';
import { WeatherData } from '../../../shared';

export function weatherDataReducer (state = initialWeatherState, action: WeatherAction.Actions): WeatherData {
    switch (action.type) {
        case WeatherAction.ActionTypes.GET_WEATHER: {
            return Object.assign({}, state, action.payload);
        }

    default:
        return state;
  }
}
