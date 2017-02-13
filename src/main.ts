import 'zone.js/dist/zone';
import 'reflect-metadata';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app';

console.log('***** RUN IN DEV MODE');
platformBrowserDynamic().bootstrapModule(AppModule);
