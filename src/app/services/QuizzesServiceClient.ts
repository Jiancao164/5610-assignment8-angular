import {Injectable} from '@angular/core';

@Injectable()
export class QuizzesServiceClient {
  findAllQuizzes = () =>
    fetch(`https://safe-eyrie-89445.herokuapp.com/api/quizzes`)
      .then(response => response.json())
  findQuizById = (quizId) =>
    fetch(`https://safe-eyrie-89445.herokuapp.com/api/quizzes/${quizId}`)
      .then(response => response.json())
}
