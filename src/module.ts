import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import 'reflect-metadata';
import "zone.js/dist/zone";

import {AppComponent}  from './app/main/src/components/app.component';
import {MapComponent} from './app/main/src/components/map.component';
import {WeatherComponent} from './app/main/src/components/weather.component';

@NgModule({
    imports:      [BrowserModule],
    declarations: [
        AppComponent,
        MapComponent,
        WeatherComponent
    ],
    bootstrap:    [AppComponent]
})
export class AppModule {}
