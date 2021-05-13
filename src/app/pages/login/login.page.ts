import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { Storage } from '@ionic/storage';
// import { AlertController, ToastController, LoadingController, NavController } from '@ionic/angular';
// import { UserService } from '../../services/user.service';
// import { User } from '../../models/user.model'
@Component({
  selector: 'app-sign-in',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
 export class LoginPage implements OnInit {
//   user: User = {
//     userName: '',
//     password: ''
//   };
//   disbaledbutton;
  constructor(
//     private alertCtrl: AlertController,
//     private toastCtrl: ToastController,
//     private loadingctrl: LoadingController,
//     private navCtrl: NavController,
//     private http: HttpClient,
//     private router: Router,
//     private userService: UserService,
//     private storage: Storage

   ) { }


   ngOnInit() { }
  }

//   ionViewDidEnter() {
//     this.router.navigate(['/signup']);

//   }
//   async tryLogin() {
//     if (this.user.userName == '') {
//       this.presentToast('email is ...');
//     }
//     else if (this.user.password) {
//       this.presentToast('password is ...')
//     }
//     else {
//       this.disbaledbutton = true;
//       const loading = await this.loadingctrl.create({
//         message: 'hello ...',
//       });
//       await loading.present();
//       return new Promise(reslove => {
//         let data = {
//           action: 'login progress',
//           userName: this.user.userName,
//           password: this.user.userName
//         }
//         this.userService.get(data).subscribe((res: any) => {
//           if (res.success == true) {
//             loading.dismiss();
//             this.disbaledbutton = false;
//             this.presentToast('loading---');
//             this.storage.set('storage_session', res.result);
//             this.navCtrl.navigateRoot(['/home']);
//           } else {
//             loading.dismiss();
//             this.disbaledbutton = false;
//             this.presentToast('Email .....,,jhffh')
//           }

//         }, (err) => {
//           loading.dismiss();
//           this.disbaledbutton = true;
//           this.presentAlertConfirm('TimeOut');
//         });
//       });
//     }
//   }
//   async presentToast(a) {
//     const toast = await this.toastCtrl.create({
//       message: a,
//       duration: 1500
//     });
//     toast.present();
//   }
//   async presentAlertConfirm(a) {
//     const alert = await this.alertCtrl.create({
//       header: a,
//       backdropDismiss: false,
//       buttons: [
//         {
//           text: 'batal',
//           handler: (blah) => {
//             console.log('confirm cancle:blah');
//           }
//         }, {
//           text: 'coba lagi',
//           handler: () => {
//             this.tryLogin();
//           }
//         }
//       ]
//     });
//     await alert.present();
//   }
// }
