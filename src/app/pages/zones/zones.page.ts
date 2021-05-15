import { PopoverComponent } from './../../popover/popover.component';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';



@Component({
  selector: 'app-zones',
  templateUrl: './zones.page.html',
  styleUrls: ['./zones.page.scss'],
})
export class ZonesPage  {

  constructor(public popoverController: PopoverController) { }
  async presentPopover(eve) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps:{},
      cssClass: 'my-custom-class',
      event: eve,
      translucent: true
    });
    await popover.present();
  }

}
