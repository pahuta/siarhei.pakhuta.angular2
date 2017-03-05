import * as CustomCityActions from './custom-city-weather.actions';
import { CustomCityState, initialCustomCityState } from './custom-city-weather.state';

export function cityNameReducer (state = initialCustomCityState, action: CustomCityActions.Actions): CustomCityState {
  switch (action.type) {
    case CustomCityActions.ActionTypes.SET_NAME: {
      return Object.assign({}, state, {name: action.newName});
    }

    default:
      return state;
  }
}
