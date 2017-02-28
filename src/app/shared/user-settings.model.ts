import { DisplayModes } from './display-modes.model';

export class UserSettings {
    displayModes?: DisplayModes;
    favoriteCity?: string;
    filter?: string;
    cityList?: ICityList;
    isRegularlyUpdateWeathers?: boolean;
    visibleOptions?: string[];

    constructor(params: UserSettings) {
        this.displayModes = new DisplayModes(params.displayModes);
        this.favoriteCity = params.favoriteCity || '';
        this.filter = params.filter || 'noFilter';
        this.cityList = params.cityList || {};
        this.isRegularlyUpdateWeathers = params.isRegularlyUpdateWeathers || false;
        this.visibleOptions = params.visibleOptions || [];
    }
}

export interface ICityList {
    [key: string]: string;
}
