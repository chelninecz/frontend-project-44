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

  switch (operator) {
    case '+': return Number(num1) + Number(num2);
    case '-': return Number(num1) - Number(num2);
    case '*': return Number(num1) * Number(num2);
    default: throw new Error(`Invalid operator - ${operator}`);
  }
};

const generateRound = () => {
  const question = generateQuestion();
  const answer = String(correctAnswer(question));
  return [question, answer];
};

export default () => {
  const rules = 'What is the result of the expression?';
  runEngine(rules, generateRound);
};
