import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { AppComponent } from './';
import { MapComponent } from './map';
import { WeatherComponent, TemperaturePipe, WindPipe, PressurePipe } from './weather';
import { LoaderComponent } from './loader';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD5FG3GEtmAyK5Yqo_e5fGQJoCQd07KA40'
        })
    ],
    declarations: [
        AppComponent,
        MapComponent,
        WeatherComponent,
        LoaderComponent,
        TemperaturePipe,
        WindPipe,
        PressurePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
