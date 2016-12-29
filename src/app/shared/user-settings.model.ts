import { DisplayModes } from './display-modes.model';

export class UserSettings {
    displayModes: DisplayModes;
    favoriteCity?: string;
    filter?: string;

    constructor(params: UserSettings) {
        this.displayModes = new DisplayModes(params.displayModes);
        this.favoriteCity = params.favoriteCity || '';
        this.filter = params.filter || '';
    }
}

