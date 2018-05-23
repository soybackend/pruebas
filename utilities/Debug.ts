import { Question } from 'serenity-js/lib/screenplay';

export const Debug = <T>(question: Question<PromiseLike<T>>) => Question.about<PromiseLike<T>>(`debug output of ${question}`, actor => {
  const answer: PromiseLike<T> = question.answeredBy(actor);

  return answer.then(value => console.log(value)).then(() => answer);
});