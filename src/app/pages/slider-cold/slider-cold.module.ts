import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SliderColdPageRoutingModule } from './slider-cold-routing.module';

import { SliderColdPage } from './slider-cold.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SliderColdPageRoutingModule
  ],
  declarations: [SliderColdPage]
})
export class SliderColdPageModule {}
