import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {
  constructor() {}
  question1 = [
    {
      text: 'Turn up the ventilation',
      rightAnswer: false,
    },
    {
      text: 'Turn down the ventilation',
      rightAnswer: true,
    },
    {
      text: 'Put on more clothes',
      rightAnswer: true,
    },
    {
      text: 'Stand up/Move around',
      rightAnswer: true,
    },
  ];
  question2 = [
    {
      text: 'The zone gets hotter',
      rightAnswer: true,
    },
    {
      text: 'The zone gets colder',
      rightAnswer: false,
    },
    {
      text: 'Airflow increases',
      rightAnswer: false,
    },
    {
      text: 'Airflow decreases',
      rightAnswer: true,
    },
  ];
  question3 = [
    {
      text: 'Turn up the ventilation',
      rightAnswer: true,
    },
    {
      text: 'Stand up/Move around',
      rightAnswer: false,
    },
    {
      text: 'Turn down the ventilation',
      rightAnswer: false,
    },
    {
      text: 'Open a window',
      rightAnswer: true,
    },
  ];
  question4 = [
    {
      text: 'Take off some clothes',
      rightAnswer: true,
    },
    {
      text: 'Turn up the ventilation',
      rightAnswer: true,
    },
    {
      text: 'Turn down the ventilation',
      rightAnswer: false,
    },
    {
      text: 'Increase the airflow',
      rightAnswer: true,
    },
  ];
  questionArr = [
    this.question1,
    this.question2,
    this.question3,
    this.question4,
  ];
  nextButtonText = 'Next question';
  checkButtonText = 'Check Answers';
  showNext = false;

  @ViewChild('mySlider') slides: IonSlides;
  swipeNext() {
    this.slides.slideNext();
    this.showNext = false;
  }
  checkAnswer() {
    this.slides.getActiveIndex().then((index) => {
      this.slides.getSwiper().then((swip) => {
        let checkboxes = swip.slides[index].querySelectorAll('ion-checkbox');
        let correctAnswers = 0;
        let correctAnswersNeeded = checkboxes.length;
        // check if checkbox input matches right answers
        for (let i = 0; i < checkboxes.length; i++) {
          let activeQuestions = this.questionArr[index];
          let isChecked = checkboxes[i].checked;
          let answer = activeQuestions[i].rightAnswer;
          if (isChecked == answer) {
            correctAnswers++;
          }
        }
        // are all answers correct?
        if (correctAnswers == correctAnswersNeeded) {
          this.handleCorrectAnswer();
          console.log('correct answers');
        } else {
          this.handleWrongAnswer();
          console.log('wrong answers');
        }
      });
    });
  }
  handleCorrectAnswer() {
    // when correct show next question button
    this.slides.getActiveIndex().then((index) => {
      this.slides.length().then((len) => {
        if (index == len - 1) {
          this.nextButtonText = 'End quiz';
        }
      });
      this.showNext = true;
    });
  }
  handleWrongAnswer() {}

  ngOnInit() {}
}
