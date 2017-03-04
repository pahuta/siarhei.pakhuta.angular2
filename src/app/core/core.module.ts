import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { UserSettingsService} from './user-settings.service';
import { StorageService } from './storage.service';
import { LocationService } from './location.service';
import { WeatherService } from './weather.service';
import { loggerServiceProvider } from './logger.service.provider';
import { RequestOptionsProvider } from './request-options.provider';

@NgModule({
    imports: [
        HttpModule
    ],
    declarations: [],
    exports: [],
    providers: [
        UserSettingsService,
        StorageService,
        LocationService,
        WeatherService,
        loggerServiceProvider,
        RequestOptionsProvider,
    ]
})
export class CoreModule {}
