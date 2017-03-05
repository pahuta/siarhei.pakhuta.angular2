import { Action } from '@ngrx/store';

export const ActionTypes = {
  SET_NAME: '[CUSTOM_CITY_WEATHER] SET_NAME',
};

export class SetCityNameAction implements Action {
  type = ActionTypes.SET_NAME;

  constructor(public newName: string) {}
}

export type Actions = SetCityNameAction;
