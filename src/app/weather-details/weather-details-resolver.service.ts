import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';

import { WeatherService } from '../core';
import { CityWeatherData } from '../shared';

@Injectable()
export class WeatherDetailsResolverService implements Resolve<Observable<CityWeatherData>> {

    constructor(
        private weatherService: WeatherService,
        private router: Router
    ) {};

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CityWeatherData> {
        return Observable.create((observer: Observer<CityWeatherData>) => {
            let id = route.params['id'];

            this.weatherService.getCityWeatherById(id)
                .map(cityWeatherData => {return cityWeatherData})
                .subscribe(
                    cityWeatherData => {
                        observer.next(cityWeatherData);
                        observer.complete();
                    },
                    err => {
                        observer.next(null);
                        observer.complete();
                        this.router.navigate(['/main']);
                    }
                );
        });
    };
}