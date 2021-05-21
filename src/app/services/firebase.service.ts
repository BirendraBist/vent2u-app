import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Zone } from '../models/Zone.model';
import { User } from '../models/user.model';



@Injectable({
 providedIn: 'root'
})
export class FirebaseService {
 collectionName = 'UserPreference'
 constructor(
  private fireStore: AngularFirestore
 ) { }

 create_userprefrence(record) {
  return this.fireStore.collection(this.collectionName).add(record);
 }
 read_userpreference() {
  return this.fireStore.collection(this.collectionName).snapshotChanges();
 }

 update_userpreference(recordID, record) {
  this.fireStore.doc(this.collectionName + '/' + recordID).update(record);
 }
 delete_userpreference(record_id) {
  this.fireStore.doc(this.collectionName + '/' + record_id).delete();
 }

 getbyid_userpreference(uid) {
  return this.fireStore.collection(this.collectionName).doc(uid).valueChanges();
 }


}