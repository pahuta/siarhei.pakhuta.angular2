import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { AppComponent } from './app.component';
import { MapComponent } from './map';
import { WeatherComponent, TemperaturePipe, WindPipe, PressurePipe, FilterPipe } from './weather';
import { WeatherWidgetComponent, TemperatureGradientPointerDirective, IconSwitchDirective,
         IconSwitchCaseDirective, IconSwitchDefaultDirective } from './weather-widget';
import { LoaderComponent } from './loader';
import { CustomCityWeatherComponent, CityWeatherPipe } from './custom-city-weather';
import { UserSettingsService, StorageService } from './shared';
import { WindWidgetComponent, WindDirectionDirective } from './weather-widget/wind-widget';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD5FG3GEtmAyK5Yqo_e5fGQJoCQd07KA40'
        })
    ],
    declarations: [
        AppComponent,
        MapComponent,
        WeatherComponent,
        WeatherWidgetComponent,
        LoaderComponent,
        CustomCityWeatherComponent,
        WindWidgetComponent,
        TemperaturePipe,
        WindPipe,
        PressurePipe,
        CityWeatherPipe,
        FilterPipe,
        TemperatureGradientPointerDirective,
        WindDirectionDirective,
        IconSwitchDirective,
        IconSwitchCaseDirective,
        IconSwitchDefaultDirective
    ],
    providers: [
        UserSettingsService,
        StorageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
