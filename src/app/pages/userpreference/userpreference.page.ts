import { Component, OnInit } from '@angular/core';
import { UserPreference } from '../../models/userpreference.model';
import { FirebaseService } from '../../services/firebase.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-userpreference',
  templateUrl: './userpreference.page.html',
  styleUrls: ['./userpreference.page.scss'],
})
export class UserpreferencePage implements OnInit {
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


  // RemoveUserPreference(rowID) {
  //   this.firebaseService.delete_userpreference(rowID);
  // }




}
