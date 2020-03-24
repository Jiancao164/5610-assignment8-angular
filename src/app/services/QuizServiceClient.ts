import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`https://safe-eyrie-89445.herokuapp.com/api/quizzes/${qid}/questions`)
      .then(response => response.json())
}
