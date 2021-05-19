import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(router:Router,
      public popoverController: PopoverController) { }
  close() {
    this.popoverController.dismiss();
  }

  ngOnInit() {
  }
  
 

}
