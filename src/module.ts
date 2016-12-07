import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { MapComponent } from './map/map.component';
import { WeatherComponent } from './weather/weather.component';
import {LoaderComponent} from './loader/loader.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        MapComponent,
        WeatherComponent,
        LoaderComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
