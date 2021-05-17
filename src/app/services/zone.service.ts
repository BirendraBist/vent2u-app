import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Zone } from '../models/Zone.model';
import { AuthConstant} from './auth-constant';

//const baseUrl = 'http://localhost:8081/api/Zone';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Zone[]> {
    return this.http.get<Zone[]>(AuthConstant.DOMAIN + 'zone');
  }

  get(id: any): Observable<Zone> {
    return this.http.get(`${AuthConstant.DOMAIN + 'zone'}/${id}`);
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
