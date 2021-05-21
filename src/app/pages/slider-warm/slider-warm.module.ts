import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SliderWarmPageRoutingModule } from './slider-warm-routing.module';

import { SliderWarmPage } from './slider-warm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SliderWarmPageRoutingModule
  ],
  declarations: [SliderWarmPage]
})
export class SliderWarmPageModule {}
