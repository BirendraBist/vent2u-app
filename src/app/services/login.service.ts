import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthConstants } from './../services/auth-constants';
import { User } from '../models/user.model';
import { AlertController } from '@ionic/angular';


@Injectable({
    providedIn: 'root'
})
export class LoginService {
    user: User[];
    constructor(
        private router: Router,alertCtrl:AlertController,
    ) { }

   




}