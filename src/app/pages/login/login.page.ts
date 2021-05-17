import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController, } from '@ionic/angular';
import { AuthConstant } from '../../services/auth-constant';

@Component({
  selector: 'app-sign-in',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userName: String;
  password: String;
  constructor(
    private alertCtrl: AlertController,
    private http: HttpClient,
    private router: Router,

  ) { }
  signinUser() {
    if (!this.userName || !this.password) {
      this.presentNotification(
        'Enter your user name and password first',
        '',
        ['ok']
      );
      console.log('please enter you username and password');
      return;
    }
    this.http
      .post(
        AuthConstant.DOMAIN + 'user/login', {
        userName: this.userName,
        password: this.password,
      },
        { observe: 'response' }

      )
      .subscribe((resp) => {
        if (resp.status == 200) {
          sessionStorage.setItem('currentUserToken', resp.body['token']);
          this.router.navigate(['/rooms']);
        }
      },
        (err) => {
          console.log(err);
          this.presentNotification('Incorrect UserName or Password... ', '', ['Again'])

        }

      );

  }
  async presentNotification(
    header: string,
    message: string,
    buttons: string[]
  ) {
    const alert = await this.alertCtrl.create({
      cssClass: 'alertClass',
      header: header,
      message: message,
      buttons: buttons,
    });
    await alert.present();
    let result = await alert.onDidDismiss();
  }
  ngOnInit() { }
}


