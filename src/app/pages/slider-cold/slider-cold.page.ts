import { Component, OnInit } from '@angular/core';
import { UserPreference } from '../../models/userpreference.model';
import { UserpreferenceService } from '../../services/userPreference.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-slider-cold',
  templateUrl: './slider-cold.page.html',
  styleUrls: ['./slider-cold.page.scss'],
})
export class SliderColdPage implements OnInit {

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
      dry: [''],
      moist: [''],
      airQuality: [''],

    })

    this.userpreferenceService.read_userpreference().subscribe(data => {
      this.userpreferenceList = data.map(e => {
        return {
          id: e.payload.doc['id'],
          uid:e.payload.doc.data()['uid'],
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
  // createUserPreference() {
  //   this.firebaseService.create_userprefrence(this.userpreferenceForm.value).then(res => {
  //     this.userpreferenceForm.reset();
  //   })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // }

  EditUserpreference(record) {
    record.isEdit = true;
    record.Editcold = record.cold;
  }

  UpdateUserpreference(recordRow) {
    let record = {};
    record['cold'] = recordRow.Editcold;
    

    this.userpreferenceService.update_userpreference(recordRow.id, record);
    recordRow.isEdit = false;
  }
}
