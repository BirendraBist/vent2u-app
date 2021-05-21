import { Component, OnInit } from '@angular/core';
import { UserPreference } from '../../models/userpreference.model';
import { FirebaseService } from '../../services/firebase.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-slider-moist',
  templateUrl: './slider-moist.page.html',
  styleUrls: ['./slider-moist.page.scss'],
})
export class SliderMoistPage implements OnInit {

  userpreference: UserPreference;
  userpreferenceList = [];
  userpreferenceForm: FormGroup;
  constructor(
    private firebaseService: FirebaseService,
    public fb: FormBuilder
  ) {
    this.userpreference = {} as UserPreference
  }

  ngOnInit() {
    this.userpreferenceForm = this.fb.group({
      cold: [''],
      warm: [''],
      dry: [''],
      moist: [''],
      airFlow: [''],

    })

    this.firebaseService.read_userpreference().subscribe(data => {
      this.userpreferenceList = data.map(e => {
        return {
          id: e.payload.doc['id'],
          isEdit: false,
          cold: e.payload.doc.data()['cold'],
          warm: e.payload.doc.data()['warm'],
          dry: e.payload.doc.data()['dry'],
          moist: e.payload.doc.data()['moist'],
          airQuality: e.payload.doc.data()['airQuality']
        };
      })
      console.log(this.userpreferenceList);
    });

  }

  EditUserpreference(record) {
    record.isEdit = true;
    record.Editmoist = record.moist;

  }

  UpdateUserpreference(recordRow) {
    let record = {};
    record['moist'] = recordRow.Editmoist;

    this.firebaseService.update_userpreference(recordRow.id, record);
    recordRow.isEdit = false;
  }

}