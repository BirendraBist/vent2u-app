import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserpreferencePageRoutingModule } from './userpreference-routing.module';

import { UserpreferencePage } from './userpreference.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UserpreferencePageRoutingModule
  ],
  declarations: [UserpreferencePage]
})
export class UserpreferencePageModule {}
