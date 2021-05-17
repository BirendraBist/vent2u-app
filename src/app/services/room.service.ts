import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../models/Room.model';
import { AuthConstant} from './auth-constant';

//const baseUrl = 'http://localhost:8081/api/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient, ) { }

  getAll(): Observable<Room[]> {
    return this.http.get<Room[]>(AuthConstant.DOMAIN +'room');
  }

  get(id: any): Observable<Room> {
    return this.http.get(`${AuthConstant.DOMAIN +'room'}/${id}`);
  }

  // create(data: any): Observable<any> {
  //   return this.http.post(AuthConstant.DOMAIN+'', data);
  // }

  // update(id: any, data: any): Observable<any> {
  //   return this.http.put(`${AuthConstant.DOMAIN+''}/${id}`, data);
  // }

  // delete(id: any): Observable<any> {
  //   return this.http.delete(`${AuthConstant.DOMAIN+''}/${id}`);
  // }

  // deleteAll(): Observable<any> {
  //   return this.http.delete(AuthConstant.DOMAIN+'');
  // }

//  findByTitle(title: any): Observable<Room[]> {
//     return this.http. get<Room[]>(`${baseUrl}?title=${title}`);
  //}
}
