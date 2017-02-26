import { Directive, Input, OnChanges, ElementRef, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[windDirection]'
})
export class WindDirectionDirective implements OnChanges {
    @Input('windDirection') degree: number;

    constructor(private el: ElementRef) {}

    ngOnChanges(changes: SimpleChanges) {
        this.el.nativeElement.style.transform = `rotateZ(${this.degree}deg)`;
    }
}
