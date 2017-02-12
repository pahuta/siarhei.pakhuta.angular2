import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherComponent } from './weather.component';
import { FilterPipe } from './filter.pipe';
import { WeatherWidgetModule } from '../weather-widget';
import { SharedModule } from '../shared';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        WeatherWidgetModule,
    ],
    declarations: [
        WeatherComponent,
        FilterPipe
    ],
    exports: [
        WeatherComponent
    ],
    providers: []
})
export class WeatherModule {}
