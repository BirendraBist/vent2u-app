import { Component, OnInit } from '@angular/core';
import { UserPreference } from '../../models/userpreference.model';
import { UserpreferenceService } from '../../services/userPreference.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-preference-history',
  templateUrl: './preference-history.page.html',
  styleUrls: ['./preference-history.page.scss'],
})
export class PreferenceHistoryPage implements OnInit {

  userpreference: UserPreference;
  userpreferenceList = [];
  userpreferenceForm: FormGroup;
  constructor(
    private userpreferenceService: UserpreferenceService,
    public fb: FormBuilder
  ) {
    this.userpreference = {} as UserPreference
  }

  ngOnInit() {
    this.userpreferenceForm = this.fb.group({
      cold: [''],
      warm: [''],
      airFlow: [''],
      dry: [''],
      moist: ['']
    })



    this.userpreferenceService.read_userpreference().subscribe(data => {
      this.userpreferenceList = data.map(e => {
        return {
          id: e.payload.doc['id'],
          isEdit: false,
          cold: e.payload.doc.data()['cold'],
          warm: e.payload.doc.data()['warm'],
          dry: e.payload.doc.data()['dry'],
          moist: e.payload.doc.data()['moist'],
          airFlow: e.payload.doc.data()['airFlow'],
        };
      })
      console.log(this.userpreferenceList);
    });
  }
}