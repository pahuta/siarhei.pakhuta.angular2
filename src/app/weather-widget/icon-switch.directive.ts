import { Directive, Input } from '@angular/core';

import { Icon } from './icon.model';

@Directive({
    selector: '[iconSwitch]'
})
export class IconSwitchDirective {
    private switchValue: string;
    private defaultIcon: Icon;
    private caseCount: number = 0;
    private lastCaseCheckIndex: number = 0;
    private wasMatched: boolean = false;

    @Input() set iconSwitch(value: string) {
        if (typeof value !== 'string') {
            value = '';
        }
        this.switchValue = value;
    }

    constructor() {}

    addCase() {
        this.caseCount++;
    }

    matchCase(caseValue: string): boolean {
        let matched = caseValue === this.switchValue;
        this.wasMatched = this.wasMatched || matched;
        this.lastCaseCheckIndex++;
        if (this.lastCaseCheckIndex === this.caseCount) {
            this.updateDefaultCase(!this.wasMatched);
            this.wasMatched = false;
            this.lastCaseCheckIndex = 0;
        }
        return matched;
    }

    setDefaultCase(icon: Icon) {
        this.defaultIcon = icon;
    }

    updateDefaultCase(isShow: boolean) {
        this.defaultIcon.changeDisplayMode(isShow)
    }
}
