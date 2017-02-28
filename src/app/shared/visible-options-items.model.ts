export class VisibleOptionsItems {
    caption: string;
    name: string;
    checked: boolean;

    constructor(optionCaption: string) {
        this.caption = optionCaption;
        this.name = optionCaption.toLowerCase();
        this.checked = true;
    }
}