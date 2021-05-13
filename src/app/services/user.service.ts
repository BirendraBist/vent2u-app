import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthConstants } from './auth-constants';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';



@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient, authConstants: AuthConstants) { }


    getAll(): Observable<User[]> {
        return this.http.get<User[]>(AuthConstants.DOMAIN + 'user');
    }

    get(id: any): Observable<User> {
        return this.http.get(`${AuthConstants.DOMAIN + 'user'}/${id}`);
    }
    create(data: any): Observable<User> {
        return this.http.post(AuthConstants.DOMAIN + 'user', data);
    }
}