import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main';
import { NotFoundComponent } from './not-found';

const routes: Routes = [
    { path: 'main', component: MainComponent, pathMatch: 'full' },
    { path: '404', component: NotFoundComponent, pathMatch: 'full' },
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: '**', redirectTo: '/404' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [],
    providers: [],
})
export class AppRoutingModule {}
