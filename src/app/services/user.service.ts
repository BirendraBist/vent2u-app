import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthConstant } from './auth-constant';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';



@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) { }


    getAll(): Observable<User[]> {
        return this.http.get<User[]>(AuthConstant.DOMAIN + 'user');
    }

    get(id: any): Observable<User> {
        return this.http.get(`${AuthConstant.DOMAIN + 'user'}/${id}`);
    }
    create(data: any): Observable<User> {
        return this.http.post(AuthConstant.DOMAIN + 'user', data);
    }
}