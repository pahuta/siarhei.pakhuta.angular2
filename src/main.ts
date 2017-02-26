import 'zone.js/dist/zone';
import 'reflect-metadata';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app';

console.log('***** RUN IN JIT MODE *****');

platformBrowserDynamic().bootstrapModule(AppModule);
