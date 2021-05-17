import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { Room } from '../../models/room.model';
import {AlertController} from '@ionic/angular';
import{Router} from '@angular/router';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage implements OnInit {
  room: Room[];

  constructor(
    private roomService: RoomService,
    private router:Router,
    private altertCtrl:AlertController
  ) { }
  public userName:string=sessionStorage.getItem('user')
  logout(){
    sessionStorage.removeItem('currentUserToken');
    this.router.navigate(['/login'])
  }
  ngOnInit(): void {
    this.retrieveRooms();
  }

  retrieveRooms(): void {
    this.roomService.getAll()
      .subscribe(
        data => {
          this.room = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });


  }

}
