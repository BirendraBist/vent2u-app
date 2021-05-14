import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialAcceptPageRoutingModule } from './tutorial-accept-routing.module';

import { TutorialAcceptPage } from './tutorial-accept.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialAcceptPageRoutingModule
  ],
  declarations: [TutorialAcceptPage]
})
export class TutorialAcceptPageModule {}
