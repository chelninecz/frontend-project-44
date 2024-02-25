import runEngine from '../index.js';
import randomGenerator from '../randomGenerator.js';

const generateQuestion = () => {
  const num1 = randomGenerator();
  const num2 = randomGenerator();
  const question = `${num1} ${num2}`;
  return question;
};

const correctAnswer = (question) => {
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

const generateRound = () => {
  const question = generateQuestion();
  const answer = String(correctAnswer(question));
  return [question, answer];
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  runEngine(rules, generateRound);
};
