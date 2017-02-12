import { NgModule } from '@angular/core';

import { UserSettingsService} from './user-settings.service';
import { StorageService } from './storage.service';
import { LocationService } from './location.service';
import { WeatherService } from './weather.service';

@NgModule({
    imports: [],
    declarations: [],
    exports: [],
    providers: [
        UserSettingsService,
        StorageService,
        LocationService,
        WeatherService
    ]
})
export class CoreModule {}
