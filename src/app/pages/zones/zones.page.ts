import { Component, OnInit } from '@angular/core';
import { Zone } from '../../models/zone.model';
import { HttpClient } from '@angular/common/http';
import { ZoneService } from '../../services/zone.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-zones',
  templateUrl: './zones.page.html',
  styleUrls: ['./zones.page.scss'],
})
export class ZonesPage implements OnInit {
  zone: Zone[];

  constructor(
    private zoneservice: ZoneService, router: Router, http: HttpClient
  ) { }


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
