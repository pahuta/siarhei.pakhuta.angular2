import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UserSettingsService} from './user-settings.service';
import { StorageService } from './storage.service';
import { SharedModule } from '../shared';
import { LoaderModule } from '../loader';

@NgModule({
    imports: [
        FormsModule,
        HttpModule,
        SharedModule,
        LoaderModule
    ],
    declarations: [],
    exports: [
        FormsModule,
        HttpModule,
        SharedModule,
        LoaderModule
    ],
    providers: [
        UserSettingsService,
        StorageService
    ]
})
export class CoreModule {}
