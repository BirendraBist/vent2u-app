import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../models/Room.model';

const baseUrl = 'https://climateindoor.herokuapp.com/api/';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient,) { }

  getAll(): Observable<Room[]> {
    return this.http.get<Room[]>(baseUrl + 'room');
  }

  get(id: any): Observable<Room> {
    return this.http.get(`${baseUrl + 'room'}/${id}`);
  }

  // create(data: any): Observable<any> {
  //   return this.http.post(baseUrl+'', data);
  // }

  // update(id: any, data: any): Observable<any> {
  //   return this.http.put(`${baseUrl+''}/${id}`, data);
  // }

  // delete(id: any): Observable<any> {
  //   return this.http.delete(`${baseUrl+''}/${id}`);
  // }

  // deleteAll(): Observable<any> {
  //   return this.http.delete(baseUrl+'');
  // }

  //  findByTitle(title: any): Observable<Room[]> {
  //     return this.http. get<Room[]>(`${baseUrl}?title=${title}`);
  //}
}
