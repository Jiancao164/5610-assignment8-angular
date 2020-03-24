import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question;
  answer = 'not answer yet';
  answered = false;

  showAnswer() {
    this.answered = true;
  }

  ngOnInit(): void {
  }

}
