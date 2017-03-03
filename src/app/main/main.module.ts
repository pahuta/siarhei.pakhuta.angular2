import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { MapModule } from '../map';
import { CustomCityWeatherModule } from '../custom-city-weather';
import { WeatherModule } from '../weather';
import { WeatherWidgetModule } from '../weather-widget';

@NgModule({
    imports: [
        CommonModule,
        MapModule,
        CustomCityWeatherModule,
        WeatherModule,
        WeatherWidgetModule,
    ],
    declarations: [
        MainComponent
    ],
    exports: [
        MainComponent
    ],
    providers: []
})
export class MainModule {}
