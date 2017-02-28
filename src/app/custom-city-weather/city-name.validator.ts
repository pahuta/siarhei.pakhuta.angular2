import { FormControl } from '@angular/forms';

export function validateCityName(c: FormControl): {[key: string]: boolean} {
    const MIN_LENGTH = 3;
    const LETTER_SPACE_REGEXP = new RegExp('^[a-zA-Z ]*$');
    const MIN_LENGTH_REGEXP = new RegExp(`^[a-zA-Z ]{${MIN_LENGTH},}$`);

    let validateErrors: {[key: string]: boolean} = {};

    let isFirstCharCapital: boolean = c.value && (c.value[0] === c.value[0].toUpperCase());
    let isOnlyLetterAndSpace: boolean = LETTER_SPACE_REGEXP.test(c.value);
    let isRightLength: boolean = MIN_LENGTH_REGEXP.test(c.value);

    if (!isFirstCharCapital) {
        validateErrors['invalidFirstCapitalLatter'] = true;
    }

    if (!isOnlyLetterAndSpace) {
        validateErrors['invalidOnlyLatterAndSpace'] = true;
    }

    if (!isRightLength) {
        validateErrors['invalidLength'] = true;
    }

    return (!isFirstCharCapital || !isOnlyLetterAndSpace || !isRightLength) ? (validateErrors) : (null);
}
