import runEngine from '../index.js';
import randomGenerator from '../randomGenerator.js';

// Generate a progression of numbers with a given start, difference, and count
const generateProgression = (start, difference, count) => {
  const progression = [];
  let current = start;
  // Iterate count times, pushing the current number to the progression
  // and updating the current number by adding the difference
  for (let i = 0; i < count; i += 1) {
    progression.push(current);
    current += difference;
  }
  return progression;
};
// Generate a question by creating a progression with missing value
const generateQuestion = () => {
  const start = randomGenerator(1, 100);
  const diff = randomGenerator(1, 10);
  const length = randomGenerator(5, 10);
  // Generate a random position for the missing value
  const position = randomGenerator(0, length - 1);
  const progression = generateProgression(start, diff, length);
  // Replace the value at the random position with an ellipsis
  progression[position] = '..';
  const progressionStr = progression.join(' ');
  // Calculate the correct answer by adding the product of the difference
  // and the position to the start
  const correctAnswer = start + (position * diff);
  return [progressionStr, correctAnswer];
};

// Generate a round by generating a question and its answer
const generateRound = () => {
  const question = generateQuestion();
  const answer = String(question[1]);
  return [question[0], answer];
};

// Export the default function, which sets up the game rules and runs the engine
// with the generateRound function
export default () => {
  const rules = 'What number is missing in the progression?';
  runEngine(rules, generateRound);
};
