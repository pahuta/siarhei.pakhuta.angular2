import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { MapComponent } from './map.component';
import { CoreModule } from '../core/core.module';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD5FG3GEtmAyK5Yqo_e5fGQJoCQd07KA40'
        }),
    ],
    declarations: [
        MapComponent
    ],
    exports: [
        MapComponent
    ],
    providers: []
})
export class MapModule {}
