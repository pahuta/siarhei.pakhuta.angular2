import { DisplayModes } from './';

export class AppOptions {
    displayModes: DisplayModes;

    constructor(params: AppOptions) {
        this.displayModes = new DisplayModes(params.displayModes);
    }
}

