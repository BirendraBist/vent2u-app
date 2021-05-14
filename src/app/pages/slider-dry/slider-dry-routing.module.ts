import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SliderDryPage } from './slider-dry.page';

const routes: Routes = [
  {
    path: '',
    component: SliderDryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SliderDryPageRoutingModule {}
