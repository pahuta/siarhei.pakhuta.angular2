import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared';
import { ErrorMessageComponent } from './error-message.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
    ],
    declarations: [
        ErrorMessageComponent
    ],
    exports: [
        ErrorMessageComponent
    ],
    providers: []
})
export class ErrorMessageModule {}
