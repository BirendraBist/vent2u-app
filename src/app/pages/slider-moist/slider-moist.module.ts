import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SliderMoistPageRoutingModule } from './slider-moist-routing.module';

import { SliderMoistPage } from './slider-moist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SliderMoistPageRoutingModule
  ],
  declarations: [SliderMoistPage]
})
export class SliderMoistPageModule {}
