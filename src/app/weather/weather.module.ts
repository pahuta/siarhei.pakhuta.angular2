import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherComponent } from './weather.component';
import { FilterPipe } from './filter.pipe';
import { CoreModule } from '../core';
import { WeatherWidgetModule } from '../weather-widget';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
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
