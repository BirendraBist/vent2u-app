import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SliderMoistPage } from './slider-moist.page';

const routes: Routes = [
  {
    path: '',
    component: SliderMoistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SliderMoistPageRoutingModule {}
