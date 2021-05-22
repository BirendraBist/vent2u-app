import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewanswersPageRoutingModule } from './newanswers-routing.module';

import { NewanswersPage } from './newanswers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewanswersPageRoutingModule
  ],
  declarations: [NewanswersPage]
})
export class NewanswersPageModule {}
