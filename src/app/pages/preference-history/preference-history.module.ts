import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreferenceHistoryPageRoutingModule } from './preference-history-routing.module';

import { PreferenceHistoryPage } from './preference-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreferenceHistoryPageRoutingModule
  ],
  declarations: [PreferenceHistoryPage]
})
export class PreferenceHistoryPageModule {}
