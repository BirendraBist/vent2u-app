import { Component, OnInit } from '@angular/core';
import { UserPreference } from '../../models/userpreference.model';
import { FirebaseService } from '../../services/firebase.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-setup',
  templateUrl: './setup.page.html',
  styleUrls: ['./setup.page.scss'],
})
export class SetupPage implements OnInit {
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
      airFlow: [''],
      dry: [''],
      moist: ['']
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
          airFlow: e.payload.doc.data()['airFlow'],
        };
      })
      console.log(this.userpreferenceList);
    });

  }

  createUserPreference() {
    this.firebaseService.create_userprefrence(this.userpreferenceForm.value).then(res => {
      this.userpreferenceForm.reset();
    })
      .catch(error => {
        console.log(error);
      })
  }
  RemoveUserPreference(rowID) {
    this.firebaseService.delete_userpreference(rowID);
  }
  // EditRecord(record) {
  //   record.isEdit = true;
  //   record.EditName = record.Name;
  //   record.EditAge = record.Age;
  //   record.EditAddress = record.Address;
  // }

  // UpdateUserPreference(recordRow) {
  //   let record = {};
  //   record['Name'] = recordRow.EditName;
  //   record['Age'] = recordRow.EditAge;
  //   record['Address'] = recordRow.EditAddress;
  //   this.firebaseService.update_userpreference(recordRow.id, record);
  //   recordRow.isEdit = false;
  // }




}