import {Injectable} from '@angular/core';

@Injectable()
export class QuizzesServiceClient {
  findAllQuizzes = () =>
    fetch(`https://localhost:3000/api/quizzes`)
      .then(response => response.json())
  findQuizById = (quizId) =>
    fetch(`https://localhost:3000/api/quizzes/${quizId}`)
      .then(response => response.json())
}
