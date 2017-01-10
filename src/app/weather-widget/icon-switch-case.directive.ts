import { Directive, TemplateRef, ViewContainerRef, Input, Host, DoCheck } from '@angular/core';

import { IconSwitchDirective } from './icon-switch.directive';
import { Icon } from './icon.model';

@Directive({
    selector: '[iconSwitchCase]'
})
export class IconSwitchCaseDirective implements DoCheck {
    @Input() iconSwitchCase: string;

    private icon: Icon;

    constructor(
        private template: TemplateRef<Object>,
        private viewContainer: ViewContainerRef,
        @Host() private iconSwitch: IconSwitchDirective
    ) {
        this.iconSwitch.addCase();
        this.icon = new Icon(viewContainer, this.template);
    }

    ngDoCheck() {
        this.icon.changeDisplayMode(this.iconSwitch.matchCase(this.iconSwitchCase));
    }
}
