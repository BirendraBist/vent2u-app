import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { Room } from '../../models/room.model';
import {AlertController} from '@ionic/angular';
import{Router} from '@angular/router';
import {UserService} from '../../services/user.service';

interface UserData {
  name: string;
  
}
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage implements OnInit {
  user=[];
  userData:UserData;
  room: Room[];

  constructor(
    private roomService: RoomService,
    private router:Router,
    private altertCtrl:AlertController,
    private userService:UserService
  ) { }
  
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
