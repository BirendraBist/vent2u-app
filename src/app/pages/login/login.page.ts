import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { AlertController } from '@ionic/angular';
// import { Constants } from '../../services/constants';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userName: String;
  password: String;
  
  constructor(
    // private httpClient: HttpClient,
    // private router: Router,
    // private alertController: AlertController
  ) { }

  // loginUser() {
  //   if (!this.userName || !this.password) {
  //     this.presentNotification(
  //       '','You must enter username and password...!!',
  //       ['Got it']
  //     );
  //     return;
  //   }
  //   this.httpClient.post(Constants.DOMAIN + 'user/login',
  //     {
  //       userName: this.userName,
  //       password: this.password,
  //     },
  //     { observe: 'response' }
  //   )
  //   .subscribe(
  //     (resp)=>{
        
  //       if(resp.status==200|| resp.status==204){
  //         this.router.navigate(['/results'])
  //       }
  //     },
  //     (err)=>{
  //       console.log(err);
  //       this.presentNotification(
  //        '', 'Your username or password is incorrect',
  //         ['Got it']
  //       )
  //     }
  //   );
  // }
  // async presentNotification(
  //   hearder: string,
  //   message: string,
  //   buttons: string[]
  // ) {
  //   const alert = await this.alertController.create(
  //     {
  //       header: hearder,
  //       message: message,
  //       buttons: buttons,
  //     });
  //   await alert.present();
  //   let result = await alert.onDidDismiss();
  //   console.log(result);
  // }






  ngOnInit() { }
}
