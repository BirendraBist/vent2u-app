import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { Room } from '../../models/room.model';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage implements OnInit {
  room: Room[];

  constructor(
    private roomService: RoomService

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
