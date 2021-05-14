import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SliderColdPage } from './slider-cold.page';

const routes: Routes = [
  {
    path: '',
    component: SliderColdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SliderColdPageRoutingModule {}
