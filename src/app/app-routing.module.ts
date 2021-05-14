import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./pages/results/results.module').then(m => m.ResultsPageModule)
  },

  {
    path: 'countdown',
    loadChildren: () => import('./pages/countdown/countdown.module').then(m => m.CountdownPageModule)

  },
  {
    path: 'rooms',
    loadChildren: () => import('./pages/rooms/rooms.module').then( m => m.RoomsPageModule)
  },
  {
    path: 'zones',
    loadChildren: () => import('./pages/zones/zones.module').then( m => m.ZonesPageModule)
  },
  {

    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },
  {
    path: 'tutorial-accept',
    loadChildren: () => import('./pages/tutorial-accept/tutorial-accept.module').then( m => m.TutorialAcceptPageModule)
  },
{

    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'preference',
    loadChildren: () => import('./pages/preference/preference.module').then( m => m.PreferencePageModule)
  },
  {
    path: 'preference-history',
    loadChildren: () => import('./pages/preference-history/preference-history.module').then( m => m.PreferenceHistoryPageModule)
  },
 
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
