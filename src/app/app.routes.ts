import { Routes } from '@angular/router';
import { DailyDealsComponent } from './daily-deals/daily-deals.component';
export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    // children:[
    //   path:'daily-deals',
    //   loadComponent:()=> import('./daily-deals/daily-deals.page').then((m)=>m.DailyDealsComponent)
    // ]
 
  },
  // {
  //   path:'daily-deals',
  //   loadComponent:()=> import('./daily-deals/daily-deals.component').then((m)=>m.DailyDealsComponent)
  // },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
