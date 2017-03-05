import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { reducer } from './core/store/custom-city-weather/reducer';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './main';
import { NotFoundComponent } from './not-found';
import { WeatherDetailsModule } from './weather-details';

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        MainModule,
        WeatherDetailsModule,
        AppRoutingModule,
        StoreModule.provideStore(reducer),
    ],
    declarations: [
        AppComponent,
        NotFoundComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
