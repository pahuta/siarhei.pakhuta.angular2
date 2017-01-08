import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector: '[windDirection]'
})
export class WindDirectionDirective implements OnInit {
    @Input('windDirection') degree: number;

    constructor(private el: ElementRef) {}

    ngOnInit() {
        this.el.nativeElement.style.transform = `rotateZ(${this.degree}deg)`;
    }
}
