import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

import { validateCityName } from './city-name.validator';

const CUSTOM_VALIDATOR_ACCESSOR = {provide: NG_VALIDATORS, useExisting: forwardRef(() => CityNameValidatorDirective), multi: true};

@Directive({
    selector: '[validateCityName][ngModel]',
    providers: [CUSTOM_VALIDATOR_ACCESSOR]
})
export class CityNameValidatorDirective implements Validator {
    validate(c: FormControl) {
        return validateCityName(c);
    }
}
