import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserpreferencePage } from './userpreference.page';

const routes: Routes = [
  {
    path: '',
    component: UserpreferencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserpreferencePageRoutingModule {}
