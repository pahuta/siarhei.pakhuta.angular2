import 'zone.js/dist/zone';
import 'reflect-metadata';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app';

// if () {
//     console.log('***** RUN IN AOT MODE');
// } else {
//     console.log('***** RUN IN JIT MODE');
// }

console.log('Mode: ', process.env.NODE_ENV);

platformBrowserDynamic().bootstrapModule(AppModule);
