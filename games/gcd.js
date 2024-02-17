import { askNameAndGreet, askQuestionGetAnswer, calcScore } from '../src/index.js';
import getRandomNum from '../src/randomGenerator.js';

const generateQuestion = () => {
  const num1 = getRandomNum(100);
  const num2 = getRandomNum(100);
  const question = `${num1} ${num2}`;
  return question;
};

const corrAnswer = (question) => {
  const [num1, num2] = question.split(' ');
  let num1Int = Number(num1);
  let num2Int = Number(num2);
  let result;
  while (num2Int !== 0) {
    result = num2Int;
    num2Int = num1Int % num2Int;
    num1Int = result;
  }
  return num1Int;
};

export default () => {
  const name = askNameAndGreet();
  console.log('Find the greatest common divisor of given numbers.');
  let score = 0;
  let playing = true;
  while (playing) {
    const question = generateQuestion();
    const answer = askQuestionGetAnswer(question);
    const correctAnswer = corrAnswer(question);
    const isCorrect = correctAnswer === Number(answer);
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
