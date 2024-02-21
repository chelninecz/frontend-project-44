import runEngine from '../index.js';
import randomGenerator from '../randomGenerator.js';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = randomGenerator();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  runEngine(rules, generateRound);
};
