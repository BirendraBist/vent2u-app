import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreferenceHistoryPage } from './preference-history.page';

const routes: Routes = [
  {
    path: '',
    component: PreferenceHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreferenceHistoryPageRoutingModule {}
