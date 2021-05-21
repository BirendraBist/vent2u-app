import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Zone } from '../models/Zone.model';
import { User } from '../models/user.model';



@Injectable({
 providedIn: 'root'
})
export class UserService {
 collectionName = 'Users'
 constructor(
  private fireStore: AngularFirestore
 ) { }

 create_user(record) {
  return this.fireStore.collection(this.collectionName).add(record);
 }
 read_user() {
  return this.fireStore.collection(this.collectionName).snapshotChanges();
 }

 update_user(recordID, record) {
  this.fireStore.doc(this.collectionName + '/' + recordID).update(record);
 }
 delete_user(record_id) {
  this.fireStore.doc(this.collectionName + '/' + record_id).delete();
 }

 getbyid_user(record_ID) {
  return this.fireStore.collection(this.collectionName).doc(record_ID).valueChanges();
 }
 

}
