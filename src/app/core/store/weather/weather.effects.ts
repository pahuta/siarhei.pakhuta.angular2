import {Injectable} from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as WeatherAction from './weather.actions';
import { WeatherService } from '../../';

@Injectable()
export class WeatherEffects {
  constructor(private actions$: Actions, private weatherService: WeatherService) {}

    @Effect() increaseRemotely$ = this.actions$
        .ofType(WeatherAction.ActionTypes.GET_WEATHER_REMOTELY)
        .map(action => action.payload)
        .switchMap((cityCount) => this.weatherService.getCitiesWeather(cityCount)
            .map(weatherData => (new WeatherAction.GetWeatherAction(weatherData)))
        );
}