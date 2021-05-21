import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SliderAirqialityPageRoutingModule } from './slider-airqiality-routing.module';

import { SliderAirqialityPage } from './slider-airqiality.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SliderAirqialityPageRoutingModule
  ],
  declarations: [SliderAirqialityPage]
})
export class SliderAirqialityPageModule { }
