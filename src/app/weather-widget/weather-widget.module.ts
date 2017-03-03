import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherWidgetComponent } from './weather-widget.component';
import { TemperatureGradientPointerDirective } from './temperature-gradient-pointer.directive';
import { IconSwitchDirective } from './icon-switch.directive';
import { IconSwitchCaseDirective } from './icon-switch-case.directive';
import { IconSwitchDefaultDirective } from './icon-switch-default.directive';
import { WindWidgetComponent, WindDirectionDirective } from './wind-widget';
import { SharedModule } from '../shared';
// import { WeatherDetailsResolverService } from '../weather-details/weather-details-resolver.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        WeatherWidgetComponent,
        TemperatureGradientPointerDirective,
        IconSwitchDirective,
        IconSwitchCaseDirective,
        IconSwitchCaseDirective,
        IconSwitchDefaultDirective,
        WindWidgetComponent,
        WindDirectionDirective
    ],
    exports: [
        WeatherWidgetComponent
    ],
    providers: [
        // WeatherDetailsResolverService
    ]
})
export class WeatherWidgetModule {}
