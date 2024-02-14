import { askNameAndGreet, askQuestionGetAnswer, calcScore } from '../src/index.js';
import getRandomNum from '../src/randomGenerator.js';

const isEven = (number) => number % 2 === 0;

export default () => {
  const name = askNameAndGreet();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let score = 0;
  let playing = true;
  while (playing) {
    const question = getRandomNum(100);
    const answer = askQuestionGetAnswer(question).toLowerCase();
    const correctAnswerText = isEven(question) ? 'yes' : 'no';
    const isCorrect = correctAnswerText === answer;
    const scoreInc = calcScore(isCorrect, answer, correctAnswerText, name);
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
