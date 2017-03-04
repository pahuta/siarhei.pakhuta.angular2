import { async, TestBed, ComponentFixture } from '@angular/core/testing';

import { WeatherWidgetComponent } from './weather-widget.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserSettingsService } from '../core/user-settings.service';
import { IconSwitchDirective } from './icon-switch.directive';
import { IconSwitchCaseDirective } from './icon-switch-case.directive';
import { IconSwitchDefaultDirective } from './icon-switch-default.directive';
import { TemperaturePipe, PressurePipe, WindPipe } from '../shared';
import { UserSettingsServiceStub, cityWeatherData, userSettings } from '../testing';

describe('Weather widget component test', () => {
    let comp: WeatherWidgetComponent;
    let fixture: ComponentFixture<WeatherWidgetComponent>;

    /*describe('1st tests', () => {
        it('true is true', () => expect(true).toBe(true));
    });*/

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                WeatherWidgetComponent,
                IconSwitchDirective,
                IconSwitchCaseDirective,
                IconSwitchDefaultDirective,
                TemperaturePipe,
                PressurePipe,
                WindPipe
            ],
            providers: [ {provide: UserSettingsService, useClass: UserSettingsServiceStub } ],
            schemas: [ NO_ERRORS_SCHEMA ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WeatherWidgetComponent);
        comp = fixture.componentInstance;
        comp.cityWeatherData = cityWeatherData;
        comp.userSettings = userSettings;
        comp.hideControls = false;

        fixture.detectChanges();
    });

    it('true is true', () => expect(true).toBe(true));
});