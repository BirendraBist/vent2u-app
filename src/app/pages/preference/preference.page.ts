import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.page.html',
  styleUrls: ['./preference.page.scss'],
})
export class PreferencePage {

  constructor() { }

  option = {
    slidesPerView: 1.15,
    centeredSlides: true,
    loop: true,
    spacebetween: 5,
  }

}
