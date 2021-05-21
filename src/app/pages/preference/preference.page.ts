import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.page.html',
  styleUrls: ['./preference.page.scss'],
})

export class PreferencePage {
  @ViewChild(IonSlides) slides: IonSlides;


  next( index) {
      this.slides.slideTo(index)
  }
  
  constructor(private router: Router) { }

  option = {
    slidesPerView: 1.15,
    centeredSlides: true,
    loop: true,
    spacebetween: 5,
  }

  // getSlide() {
  //   this.router.navigate(["/preference/:section1"]);
  // }


}
