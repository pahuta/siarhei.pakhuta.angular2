import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { WeatherWidgetComponent } from './weather-widget.component';
import { UserSettingsService } from '../core';
import { IconSwitchDirective } from './icon-switch.directive';
import { IconSwitchCaseDirective } from './icon-switch-case.directive';
import { IconSwitchDefaultDirective } from './icon-switch-default.directive';
import { TemperaturePipe, PressurePipe, WindPipe } from '../shared';
import { UserSettingsServiceStub, cityWeatherData, userSettings } from '../testing';

describe('Weather widget component test', () => {
    let comp: WeatherWidgetComponent;
    let fixture: ComponentFixture<WeatherWidgetComponent>;

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

    it(`should be initialized`, () => {
        expect(fixture).toBeDefined();
        expect(comp).toBeDefined();
    });

    it('Visible city name', () => {
        let cityName = fixture.debugElement.query(By.css('.city-name')).nativeElement.innerHTML;
        expect(cityName).toBe('Homyel');
    });

    it('Add to favorite', () => {
        let favoriteButton = fixture.debugElement.query(By.css('.control.favorite'));
        favoriteButton.triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(favoriteButton.nativeElement.classList.contains('active')).toBeTruthy();
    });
});