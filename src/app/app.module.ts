import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CustomCityWeatherModule } from './custom-city-weather';
import { MapModule } from './map';
import { WeatherModule } from './weather';
import { WeatherWidgetModule } from './weather-widget';

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        CustomCityWeatherModule,
        MapModule,
        WeatherModule,
        WeatherWidgetModule
    ],
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
