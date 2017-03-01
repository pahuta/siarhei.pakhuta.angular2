import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { VisibleOptionsItems } from '../shared';

const CHECKBOX_VALUE_ACCESSOR = {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CheckboxComponent), multi: true};

@Component({
    selector: 'checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
    providers: [CHECKBOX_VALUE_ACCESSOR]
})
export class CheckboxComponent implements ControlValueAccessor {
    @Input() item: VisibleOptionsItems;

    _value: boolean;

    onChange: Function = () => {};
    onTouched: Function = () => {};

    get value() {
        return this._value;
    }

    set value(value) {
        if (!value) {
            value = null;
        }
        this._value = value;
        this.onChange(value);
        this.onTouched();
    }

    registerOnChange(fn: () => {}) {
        this.onChange = fn;
    }

    writeValue(value: boolean) {
        this._value = this.item['checked'];
    }

    registerOnTouched(fn: () => {}) {
        this.onTouched = fn;
    }

    valueChanged(target: HTMLInputElement) {
        this.value = target.checked;
    }
}
