import { NgModule } from '@angular/core';

import { UserSettingsService} from './user-settings.service';
import { StorageService } from './storage.service';

@NgModule({
    imports: [],
    declarations: [],
    exports: [],
    providers: [
        UserSettingsService,
        StorageService
    ]
})
export class CoreModule {}
