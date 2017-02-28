import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomCityWeatherComponent } from './custom-city-weather.component';
import { CityWeatherPipe } from './city-weather.pipe';
import { WeatherWidgetModule } from '../weather-widget';
import { SharedModule } from '../shared';
import { CityNameValidatorDirective } from './city-name-validator.directive';
import { ErrorMessageModule } from '../error-message';

@NgModule({
    imports: [
        SharedModule,
        WeatherWidgetModule,
        ErrorMessageModule,
        CommonModule
    ],
    declarations: [
        CustomCityWeatherComponent,
        CityWeatherPipe,
        CityNameValidatorDirective
    ],
    exports: [
        CustomCityWeatherComponent
    ],
    providers: []
})
export class CustomCityWeatherModule {}
