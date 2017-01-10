import { DisplayModes } from './display-modes.model';

export class UserSettings {
    displayModes?: DisplayModes;
    favoriteCity?: string;
    filter?: string;
    cityList?: ICityList;
    isRegularlyUpdateWeathers?: boolean;

    constructor(params: UserSettings) {
        this.displayModes = new DisplayModes(params.displayModes);
        this.favoriteCity = params.favoriteCity || '';
        this.filter = params.filter || 'noFilter';
        this.cityList = params.cityList || {};
        this.isRegularlyUpdateWeathers = params.isRegularlyUpdateWeathers || false;
    }
}

export interface ICityList {
    [key: string]: string;
}
