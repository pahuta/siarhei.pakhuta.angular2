import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector: '[temperatureGradientPointer]'
})
export class TemperatureGradientPointerDirective implements OnInit {
    @Input('temperatureGradientPointer') temperatureK: number;

    constructor(private el: ElementRef) {}

    ngOnInit() {
        // defining min and max temperature for temperature-gradient (-30 C and +30 C)
        let maxTempDeltaFromZero = 30;
        let top = 50 - (this.temperatureK - 273.15 ) * 100 / (2 * maxTempDeltaFromZero);

        if (top > 100) {
            top = 100;
        }
        if (top < 0) {
            top = 0;
        }

        this.el.nativeElement.style.top = top + '%';
    }
}
