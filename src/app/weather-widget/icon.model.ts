import { ViewContainerRef, TemplateRef } from '@angular/core';

export class Icon {
    private isCreated = false;

    constructor(
        private viewContainer: ViewContainerRef, private template: TemplateRef<Object>
    ) {}

    create(): void {
        this.isCreated = true;
        this.viewContainer.createEmbeddedView(this.template);
    }

    destroy(): void {
        this.isCreated = false;
        this.viewContainer.clear();
    }

    changeDisplayMode(isShow: boolean) {
        if (isShow && !this.isCreated) {
            this.create();
        } else if (!isShow && this.isCreated) {
            this.destroy();
        }
    }
}

