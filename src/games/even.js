import { askNameAndGreet, askQuestionGetAnswer, calcScore } from '../index.js';
import getRandomNum from '../randomGenerator.js';

const isEven = (number) => number % 2 === 0;

export default () => {
  const name = askNameAndGreet();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let score = 0;
  let playing = true;
  while (playing) {
    const question = getRandomNum(100);
    const answer = askQuestionGetAnswer(question).toLowerCase();
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    const isCorrect = correctAnswer === answer;
    const scoreInc = calcScore(isCorrect, answer, correctAnswer, name);
    score += scoreInc;
    if (scoreInc === 0) {
      playing = false;
    }
    if (score === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
};
