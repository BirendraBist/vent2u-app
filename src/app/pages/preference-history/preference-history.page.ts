import { Component, OnInit } from '@angular/core';

import { PreferencehistoryService } from '../../services/preferencehistory.service';
import { Preferencehistory } from '../../models/peferencehistory.model';


@Component({
  selector: 'app-preference-history',
  templateUrl: './preference-history.page.html',
  styleUrls: ['./preference-history.page.scss'],
})
export class PreferenceHistoryPage implements OnInit {

  prfceHistory: Preferencehistory[];
  constructor(
    private prfcehistoryService: PreferencehistoryService
  ) { }

  ngOnInit(): void {
    this.retrieveRooms();
  }

  retrieveRooms(): void {
    this.prfcehistoryService.getAll()
      .subscribe(
        data => {
          this.prfceHistory = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });

  }

}
