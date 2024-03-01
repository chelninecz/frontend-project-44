import runEngine from '../index.js';
import randomGenerator from '../randomGenerator.js';

// Generates a question in the form of a string, which contains
// two random numbers separated by a space.
const generateQuestion = () => {
  const num1 = randomGenerator();
  const num2 = randomGenerator();
  const question = `${num1} ${num2}`;
  return question;
};

// Calculates the greatest common divisor (GCD) of two numbers
// using the Euclidean algorithm and returns the result as a string.
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

// Generate a round by generating a question and its answer
const generateRound = () => {
  const question = generateQuestion();
  const answer = String(correctAnswer(question));
  return [question, answer];
};

// Export the default function, which sets up the game rules and runs the engine
// with the generateRound function
export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  runEngine(rules, generateRound);
};
