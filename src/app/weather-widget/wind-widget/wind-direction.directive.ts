import { Directive, Input, OnChanges, ElementRef } from '@angular/core';

@Directive({
    selector: '[windDirection]'
})
export class WindDirectionDirective implements OnChanges {
    @Input('windDirection') degree: number;

    constructor(private el: ElementRef) {}

    ngOnChanges() {
        this.el.nativeElement.style.transform = `rotateZ(${this.degree}deg)`;
    }
}
