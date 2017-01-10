import { Directive, TemplateRef, ViewContainerRef, Host } from '@angular/core';

import { IconSwitchDirective } from './icon-switch.directive';
import { Icon } from './icon.model';

@Directive({
    selector: '[iconSwitchDefault]'
})
export class IconSwitchDefaultDirective {
    constructor(
        private template: TemplateRef<Object>,
        private viewContainer: ViewContainerRef,
        @Host() private iconSwitch: IconSwitchDirective
    ) {
        iconSwitch.setDefaultCase(new Icon(viewContainer, template));
    }
}
