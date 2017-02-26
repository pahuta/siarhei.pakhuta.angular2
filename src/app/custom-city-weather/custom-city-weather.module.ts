import { NgModule } from '@angular/core';

import { CustomCityWeatherComponent } from './custom-city-weather.component';
import { CityWeatherPipe } from './city-weather.pipe';
import { WeatherWidgetModule } from '../weather-widget';
import { SharedModule } from '../shared';

@NgModule({
    imports: [
        SharedModule,
        WeatherWidgetModule
    ],
    declarations: [
        CustomCityWeatherComponent,
        CityWeatherPipe,
    ],
    exports: [
        CustomCityWeatherComponent
    ],
    providers: []
})
export class CustomCityWeatherModule {}
