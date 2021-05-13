import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthConstants } from './../services/auth-constants';

@Injectable({
providedIn: 'root'
})
export class AuthService {
userData$ = new BehaviorSubject<any>([]);

constructor(

private router: Router
) {}





}