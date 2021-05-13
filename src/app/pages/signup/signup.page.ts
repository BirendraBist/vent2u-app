import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthConstants } from '../../services/auth-constants';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-account',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  userName: String;
  password: String;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    public alertController: AlertController
  ) {}

  createUser() {
    
       this.httpClient
      .post(
        AuthConstants.DOMAIN + 'user',
        {
          userName: this.userName,
          password: this.password,
        },
        { observe: 'response' }
      )
      .subscribe(
        (resp) => {
          if (resp.status == 200 || resp.status == 204) {
            this.handleCreation();
          }
        },
        (err) => {
          console.log('error', err);
        }
      );
  }

  

  async presentNotification(
    header: string,
    message: string,
    buttons: string[]
  ) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: buttons,
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async handleCreation() {
    await this.presentNotification(
      'Success',
      'Your account has been created. Now you can log in.',
      ["Let's go"]
    );
    this.router.navigate(['login']);
  }

  async handlerFailuer() {}

  ngOnInit() {}
}
