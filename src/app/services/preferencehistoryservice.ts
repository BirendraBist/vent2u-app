import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Preferencehistory } from '../models/peferencehistory.model';
import { AuthConstants } from './auth-constants';


@Injectable({
  providedIn: 'root'
})
export class PreferencehistoryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Preferencehistory[]> {
    return this.http.get<Preferencehistory[]>(AuthConstants.DOMAIN + 'userpreference');
  }

  get(id: any): Observable<Preferencehistory> {
    return this.http.get(`${AuthConstants.DOMAIN + 'userpreference'}/${id}`);
  }

  //   create(data: any): Observable<any> {
  //     return this.http.post(baseUrl, data);
  //   }

  //   update(id: any, data: any): Observable<any> {
  //     return this.http.put(`${baseUrl}/${id}`, data);
  //   }

  //   delete(id: any): Observable<any> {
  //     return this.http.delete(`${baseUrl}/${id}`);
  //   }

  //   deleteAll(): Observable<any> {
  //     return this.http.delete(baseUrl);
  //   }

  //  findByTitle(title: any): Observable<Zone[]> {
  //     return this.http. get<Zone[]>(`${baseUrl}?title=${title}`);
  //}
}
