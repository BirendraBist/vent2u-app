import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

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
    path: 'results',
    loadChildren: () => import('./pages/results/results.module').then(m => m.ResultsPageModule)
  },

  {
    path: 'countdown',
    loadChildren: () => import('./pages/countdown/countdown.module').then(m => m.CountdownPageModule)

  },
  {
    path: 'rooms',
    loadChildren: () => import('./pages/rooms/rooms.module').then(m => m.RoomsPageModule)
    , canActivate: [AuthGuard]
  },
  {
    path: 'zones',
    loadChildren: () => import('./pages/zones/zones.module').then(m => m.ZonesPageModule)

  },
  {


    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialPageModule)
  },
  {
    path: 'tutorial-accept',
    loadChildren: () => import('./pages/tutorial-accept/tutorial-accept.module').then(m => m.TutorialAcceptPageModule)
  },

  {
    path: 'preference',
    loadChildren: () => import('./pages/preference/preference.module').then(m => m.PreferencePageModule)
  }, {
    path: 'preference/:id',
    loadChildren: () => import('./pages/preference/preference.module').then(m => m.PreferencePageModule)
  },

  {
    path: 'slider-cold',
    loadChildren: () => import('./pages/slider-cold/slider-cold.module').then(m => m.SliderColdPageModule)
  },
  {
    path: 'slider-airqiality',
    loadChildren: () => import('./pages/slider-airqiality/slider-airqiality.module').then(m => m.SliderAirqialityPageModule)
  },
  {
    path: 'slider-warm',
    loadChildren: () => import('./pages/slider-warm/slider-warm.module').then(m => m.SliderWarmPageModule)
  },
  {
    path: 'slider-moist',
    loadChildren: () => import('./pages/slider-moist/slider-moist.module').then(m => m.SliderMoistPageModule)
  },
  {
    path: 'slider-dry',
    loadChildren: () => import('./pages/slider-dry/slider-dry.module').then(m => m.SliderDryPageModule)
  },

  {
    path: 'popover',
    loadChildren: () => import('./pages/popover/popover.module').then(m => m.PopoverPageModule)

  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },

  {
    path: 'setup',
    loadChildren: () => import('./pages/setup/setup.module').then(m => m.SetupPageModule)
  },
  {
    path: 'preference-history',
    loadChildren: () => import('./pages/preference-history/preference-history.module').then(m => m.PreferenceHistoryPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
