import { NgModule } from '@angular/core';

import { PressurePipe } from './pressure.pipe';
import { TemperaturePipe } from './temperature.pipe';
import { WindPipe } from './wind.pipe';

@NgModule({
    imports: [],
    declarations: [
        PressurePipe,
        TemperaturePipe,
        WindPipe
    ],
    exports: [
        PressurePipe,
        TemperaturePipe,
        WindPipe
    ],
    providers: []
})
export class SharedModule {}
