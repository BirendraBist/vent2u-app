import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewanswersPage } from './newanswers.page';

const routes: Routes = [
  {
    path: '',
    component: NewanswersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewanswersPageRoutingModule {}
