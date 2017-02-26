import 'zone.js/dist/zone';
import 'reflect-metadata';
import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';

import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';

console.log('***** RUN IN AOT MODE *****');

enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
