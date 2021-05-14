import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})

export class TutorialPage implements OnInit {

  tutorialQuestions = [ {
    "text": "Turn up the ventilation",
     "rightAnswer":true
    },
    { 
      "text": "Turn down the ventilation",
       "rightAnswer":true 
    },
    { 
      "text": "Close the window",
       "rightAnswer":true 
      },
    { 
      "text": "Take off your jacket",
      "rightAnswer":true 
    }
  ]; 

  constructor() {
    
   }

  ngOnInit() {
  }

}
