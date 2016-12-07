import 'zone.js/dist/zone';
import 'reflect-metadata';
// import 'reflect-metadata/Reflect.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './module';

platformBrowserDynamic().bootstrapModule(AppModule);
