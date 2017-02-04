import { Component, OnInit } from '@angular/core';

import { Coords, UserSettingsService, UserSettings } from './shared'
import { Observable, Observer, Scheduler } from 'rxjs';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    styles: [require('./app.component.scss').toString()]
})
export class AppComponent implements OnInit {
    currentPositionPromise: Promise<Coords>;
    currentPosition: Coords = {
        lat: 0,
        lng: 0
    };
    isOpenDisplayModesMenu: boolean = false;
    userSettings: UserSettings;

    constructor(private userSettingsService: UserSettingsService) {}

    ngOnInit() {
        this.currentPositionPromise = new Promise((resolve: Function, reject: Function) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position: Position) => {
                    this.currentPosition = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    resolve(this.currentPosition);
                });
            }
        });

        // subscribe on change userSettings. Returning userSettings object is immutable
        this.userSettingsService.getSettingsObservable().subscribe(
            (userSettings) => {
                this.userSettings = userSettings;
            }
        );

        this.task6();
    }

    setScale(parameterName: string, scale: string) {
        switch (parameterName) {
            case 'temperature': {
                this.userSettingsService.setSettings({'displayModes.temperature': scale});
            }
                break;
            case 'wind': {
                this.userSettingsService.setSettings({'displayModes.wind': scale});
            }
                break;
            case 'pressure': {
                this.userSettingsService.setSettings({'displayModes.pressure': scale});
            }
                break;
        }

        this.isOpenDisplayModesMenu = false;
    }

    task6() {
        let $source = Observable.interval(50)
            .take(10)
            .flatMap((x: number): Observable<number> => {
                if (x > 5) {
                    return Observable.throw(new Error('More than 5'));
                }
                return Observable.timer(200).map(() => x);
            })
            .retry(3)
            .take(1);

        let observer = {
            next: (value: number) => {
                console.log(value);
            },
            error: () => {},
            complete: () => {
                console.log('COMPLITED and unsubscribed');
                subscription.unsubscribe();
            }
        };

        let subscription = $source.subscribe(observer);


        // Schedulers
        let $sourceHeavyProcess = Observable.create((observerHeavyProcess: Observer<number>) => {
            let tempArray: number[] = [];
            for (let i = 0; i < 999; i++) {
                tempArray.unshift(Math.round(Math.random() * 10));
            }
            observerHeavyProcess.next(tempArray.length);
            observerHeavyProcess.complete();
        }).observeOn(Scheduler.asap);

        console.log('before HeavyProcess');
        $sourceHeavyProcess.subscribe(
            (arrayLength: number) => {
                console.log('Heavy Process Done. Array length', arrayLength);
            }
        );
        console.log('after HeavyProcess');
    }
}
