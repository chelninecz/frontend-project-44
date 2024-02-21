import runEngine from '../index.js';
import randomGenerator from '../randomGenerator.js';

const generateQuestion = () => {
  const num1 = randomGenerator();
  const num2 = randomGenerator();
  const operators = ['+', '-', '*'];
  const operator = operators[randomGenerator(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  return question;
};

const correctAnswer = (question) => {
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

const generateRound = () => {
  const question = generateQuestion();
  const answer = correctAnswer(question);
  return [question, Number(answer)];
};

const rules = 'What is the result of the expression?';

export default () => {
  runEngine(rules, generateRound);
};
