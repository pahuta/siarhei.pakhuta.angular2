import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './main';
import { NotFoundComponent } from './not-found';
import { WeatherDetailsModule } from './weather-details';
import { WeatherEffects } from './core/store/weather/';
import { reducer } from './core/store/reducers/index';

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        MainModule,
        WeatherDetailsModule,
        AppRoutingModule,
        StoreModule.provideStore(reducer),
        EffectsModule.run(WeatherEffects),
    ],
    declarations: [
        AppComponent,
        NotFoundComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
