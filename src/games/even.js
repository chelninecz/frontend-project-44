import runEngine from '../index.js';
import randomGenerator from '../randomGenerator.js';

// isEven function checks if a number is even or odd
const isEven = (number) => number % 2 === 0;

// Generate a round by generating a question and its answer
const generateRound = () => {
  const question = randomGenerator();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

// Export the default function, which sets up the game rules and runs the engine
// with the generateRound function
export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(rules, generateRound);
};
