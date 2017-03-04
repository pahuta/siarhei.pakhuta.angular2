import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { WindWidgetComponent } from './wind-widget.component';
import { WindDirectionDirective } from './wind-direction.directive';
import { WindPipe } from '../../shared';
import { userSettings } from '../../testing';


describe('Wind direction directive test', () => {
    let comp: WindWidgetComponent;
    let fixture: ComponentFixture<WindWidgetComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ WindWidgetComponent, WindDirectionDirective, WindPipe],
            schemas: [ NO_ERRORS_SCHEMA ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WindWidgetComponent);
        comp = fixture.componentInstance;
        comp.windData = { deg: 0, speed: 20};
        comp.userSettings = userSettings;

        fixture.detectChanges();
    });

    it(`should be initialized`, () => {
        expect(fixture).toBeDefined();
        expect(comp).toBeDefined();
    });

    it('0 degree', () => {
        let arrowEl = fixture.debugElement.query(By.css('.wind-direction-icon')).nativeElement;
        expect(arrowEl.style.transform).toBe('rotateZ(0deg)');
    });

    it('90 degree', () => {
        comp.windData.deg = 90;
        fixture.detectChanges();
        let arrowEl = fixture.debugElement.query(By.css('.wind-direction-icon')).nativeElement;
        expect(arrowEl.style.transform).toBe('rotateZ(90deg)');
    });
});