import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SliderDryPageRoutingModule } from './slider-dry-routing.module';

import { SliderDryPage } from './slider-dry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SliderDryPageRoutingModule
  ],
  declarations: [SliderDryPage]
})
export class SliderDryPageModule {}
