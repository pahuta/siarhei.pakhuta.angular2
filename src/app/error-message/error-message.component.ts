import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'error-message',
    template: '<span>{{errorMessage}}</span>',
    styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnChanges {
    @Input() messageParams: {[key: string]: string};
    @Input() errors: {[key: string]: boolean};

    errorMessage: string;

    constructor() {}

    ngOnChanges() {
        // map error key with error message
        if (this.errors) {
            let errorsKey = Object.keys(this.errors);
            this.errorMessage = (this.messageParams[errorsKey[0]]) ? (this.messageParams[errorsKey[0]]) : ('Field is invalid');
        } else {
            this.errorMessage = '';
        }
    }
}
