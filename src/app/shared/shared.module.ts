import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PressurePipe } from './pressure.pipe';
import { TemperaturePipe } from './temperature.pipe';
import { WindPipe } from './wind.pipe';
import { LoaderModule } from '../loader';

@NgModule({
    imports: [
        FormsModule,
        HttpModule,
        RouterModule,
        LoaderModule
    ],
    declarations: [
        PressurePipe,
        TemperaturePipe,
        WindPipe
    ],
    exports: [
        RouterModule,
        FormsModule,
        HttpModule,
        PressurePipe,
        TemperaturePipe,
        WindPipe,
        LoaderModule
    ],
    providers: []
})
export class SharedModule {}
