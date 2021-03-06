import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../services/QuizServiceClient';
import {ActivatedRoute} from '@angular/router';
import {QuizzesServiceClient} from '../services/QuizzesServiceClient';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private service: QuizServiceClient,
              private quizzesService: QuizzesServiceClient,
              private route: ActivatedRoute) {
  }

  quizId = '';
  courseId = '';
  quizTitle = '';
  questions = [];
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.quizId;
      this.courseId = params.courseId;
      this.quizzesService.findQuizById(this.quizId).
      then(quiz =>  this.quizTitle = quiz.title);
      this.service.findQuestionsForQuiz(this.quizId)
        .then(questions => this.questions = questions);
    });
  }

}
