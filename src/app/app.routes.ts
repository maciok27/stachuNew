import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PaintComponent } from './paint/paint.component';
import { BlankComponent } from './blank/blank.component';
import { BanditComponent } from './bandit/bandit.component';
export const routes: Routes = [
    { path: 'mainpage', component: MainpageComponent },
    { path: 'mainpage/:easterEgg', component: MainpageComponent },
    { path: 'Paint', component: PaintComponent },
    { path: 'blank', component: BlankComponent },
    { path: 'Machine', component: BanditComponent},
    { path: 'polska', component: BanditComponent}
];
