import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherDetaildComponent } from './weather-details.component';
import { WeatherDetailsResolverService } from './weather-details-resolver.service';

const weatherDetailsRoutes: Routes = [
    {
        path: 'weather-details',
        children: [
            {
                path: ':id',
                component: WeatherDetaildComponent,
                pathMatch: 'full',
                resolve: {
                    weatherData: WeatherDetailsResolverService
                }
            },
            {
                path: '', redirectTo: '/main', pathMatch: 'full'
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(weatherDetailsRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [],
    providers: [],
})
export class WeatherDetailsRoutingModule {}
