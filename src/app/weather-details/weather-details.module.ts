import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherWidgetModule } from '../weather-widget';
import { SharedModule } from '../shared';
import { WeatherDetailsRoutingModule } from './weather-details-routing.module';
import { WeatherDetaildComponent } from './weather-details.component';
import { WeatherDetailsResolverService } from './weather-details-resolver.service';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        WeatherWidgetModule,
        WeatherDetailsRoutingModule
    ],
    declarations: [
        WeatherDetaildComponent
    ],
    exports: [
        WeatherDetaildComponent,
        WeatherDetailsRoutingModule
    ],
    providers: [
        WeatherDetailsResolverService
    ]
})
export class WeatherDetailsModule {}
