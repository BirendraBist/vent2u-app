import { Component, OnInit } from '@angular/core';

import { Zone } from '../../models/zone.model';
import { HttpClient } from '@angular/common/http';
import { ZoneService } from '../../services/zone.service';
import { Router } from '@angular/router';
import { PopoverPage } from '../popover/popover.page';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-zones',
  templateUrl: './zones.page.html',
  styleUrls: ['./zones.page.scss'],
})
export class ZonesPage implements OnInit {
  zone: Zone[];
  id:any;

  constructor(
    private zoneservice: ZoneService, 
    private router: Router, 
    private http: HttpClient,
    public popoverController: PopoverController,

  ) { }


  async presentPopover(eve) {
    const popover = await this.popoverController.create({
      component: PopoverPage,
      componentProps:{},
      cssClass: 'my-custom-class',
      event: eve,
      translucent: true
    });
    await popover.present();
  }
  
  


  ngOnInit(): void {
    this.retrieveZone();
  }
  retrieveZone(): void {
    this.zoneservice.getAll()
      .subscribe(data => {
        this.zone = data;
        console.log(data);

      },
        error => {
          console.log(error);
        })
  }
  

  
}
