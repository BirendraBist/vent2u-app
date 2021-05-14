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
    private http: HttpClient,
    private router: Router,
    public alertCtrl: AlertController,
  ) { }
  signupUser() {
    if (!this.userName || !this.password) {
      this.presentNotification(
        'please fill the above fields',
        '',
        ['ok']
      );
      return;
    }

    this.http
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
          if (resp.status == 200) {
            this.presentNotification(
              '😊 Super ',
              'Now you can sign in...  ',
              ["OK"]
            );
            this.router.navigate(['/login']);

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
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: buttons,
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
  // async handleCreation() {
  //   await this.presentNotification(
  //     '😊 Super ',
  //     'Now you can sign in...  ',
  //     ["OK"]
  //   );
  //   this.router.navigate(['/login']);
  // }
  async handleFailuer() {

  }
  ngOnInit() { }
}
