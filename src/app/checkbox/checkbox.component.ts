import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const CHECKBOX_VALUE_ACCESSOR = {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CheckboxComponent), multi: true};

@Component({
    selector: 'checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
    providers: [CHECKBOX_VALUE_ACCESSOR]
})
export class CheckboxComponent implements ControlValueAccessor {
    @Input() items: any;
    // @Input() nameOption: string;

    currentValue: any;

    valueChanged($event: Event) {
        this.checked = $event.target;
    }

    set checked(newValue) {
        debugger;
        this.currentValue = newValue;
        this.onChange(newValue);
    }

    get checked() {
        return this.currentValue;
    }

    onChange = (newValue: boolean) => {};
    onTouched = () => {};

    registerOnChange(fn: () => void) {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void) {
        this.onTouched = fn;
    }

    writeValue(value: boolean) {
        if (value !== this.currentValue) {
            debugger;
            this.currentValue = value;
        }
    }

    setDisabledState(isDisabled: boolean) {}
}
