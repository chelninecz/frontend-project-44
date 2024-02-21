import { askNameAndGreet, askQuestionGetAnswer, calcScore } from '../index.js';
import getRandomNum from '../randomGenerator.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const name = askNameAndGreet();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let score = 0;
  let playing = true;
  while (playing) {
    const question = getRandomNum(100);
    const answer = askQuestionGetAnswer(question).toLowerCase();
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
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
