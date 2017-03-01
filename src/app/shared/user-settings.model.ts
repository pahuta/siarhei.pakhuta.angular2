import { forEach } from 'lodash';
import { DisplayModes } from './display-modes.model';
import { VisibleOptionsItems } from './visible-options-items.model';

export class UserSettings {
    displayModes?: DisplayModes;
    favoriteCity?: string;
    filter?: string;
    cityList?: ICityList;
    isRegularlyUpdateWeathers?: boolean;
    visibleOptionsItems?: VisibleOptionsItems[];

    constructor(params: UserSettings) {
        let optionsCaption = ['Humidity', 'Wind', 'Pressure'];

        this.displayModes = new DisplayModes(params.displayModes);
        this.favoriteCity = params.favoriteCity || '';
        this.filter = params.filter || 'noFilter';
        this.cityList = params.cityList || {};
        this.isRegularlyUpdateWeathers = params.isRegularlyUpdateWeathers || false;

        if (params.visibleOptionsItems) {
            this.visibleOptionsItems = params.visibleOptionsItems;
        } else {
            this.visibleOptionsItems = [];
            forEach(optionsCaption, (optionCaption: string) => {
                this.visibleOptionsItems.push(new VisibleOptionsItems(optionCaption));
            });
        }
    }
}

export interface ICityList {
    [key: string]: string;
}
