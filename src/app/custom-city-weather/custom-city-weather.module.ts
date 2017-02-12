import { NgModule } from '@angular/core';

import { CustomCityWeatherComponent } from './custom-city-weather.component';
import { CityWeatherPipe } from './city-weather.pipe';
import { WeatherWidgetModule } from '../weather-widget';
import { CoreModule } from '../core';

@NgModule({
    imports: [
        CoreModule,
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
