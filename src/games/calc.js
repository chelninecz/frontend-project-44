import { askNameAndGreet, askQuestionGetAnswer, calcScore } from '../index.js';

const generateQuestion = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${num1} ${operator} ${num2}`;
  return question;
};
const corrAnswer = (question) => {
  const [num1, operator, num2] = question.split(' ');
  let result;

  switch (operator) {
    case '+':
      result = Number(num1) + Number(num2);
      break;
    case '-':
      result = Number(num1) - Number(num2);
      break;
    case '*':
      result = Number(num1) * Number(num2);
      break;
    default:
      result = 'Invalid operator';
  }

  return result;
};
export default () => {
  const name = askNameAndGreet();
  console.log('What is the result of the expression?');
  let score = 0;
  let playing = true;
  while (playing) {
    const question = generateQuestion();
    const answer = parseInt(askQuestionGetAnswer(question), 10);
    const isCorrect = corrAnswer(question) === answer;
    const scoreInc = calcScore(isCorrect, answer, corrAnswer(question), name);
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
