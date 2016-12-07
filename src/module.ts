import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AppComponent } from './app/app.component';
import { MapComponent } from './map/map.component';
import { WeatherComponent } from './weather/weather.component';
import {LoaderComponent} from './loader/loader.component';

@NgModule({
    imports: [
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD5FG3GEtmAyK5Yqo_e5fGQJoCQd07KA40'
        })
    ],
    declarations: [
        AppComponent,
        MapComponent,
        WeatherComponent,
        LoaderComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
