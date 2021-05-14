import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SliderAirqialityPage } from './slider-airqiality.page';

const routes: Routes = [
  {
    path: '',
    component: SliderAirqialityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SliderAirqialityPageRoutingModule {}
