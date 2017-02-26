import { NgModule } from '@angular/core';

import { PressurePipe } from './pressure.pipe';
import { TemperaturePipe } from './temperature.pipe';
import { WindPipe } from './wind.pipe';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoaderModule } from '../loader';

@NgModule({
    imports: [
        FormsModule,
        HttpModule,
        LoaderModule
    ],
    declarations: [
        PressurePipe,
        TemperaturePipe,
        WindPipe
    ],
    exports: [
        PressurePipe,
        TemperaturePipe,
        WindPipe,
        FormsModule,
        HttpModule,
        LoaderModule
    ],
    providers: []
})
export class SharedModule {}
