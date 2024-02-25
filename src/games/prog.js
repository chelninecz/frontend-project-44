import runEngine from '../index.js';
import randomGenerator from '../randomGenerator.js';

const generateProgression = (start, difference, count) => {
  const progression = [];
  let current = start;
  for (let i = 0; i < count; i += 1) {
    progression.push(current);
    current += difference;
  }
  return progression;
};
const generateQuestion = () => {
  const start = randomGenerator(1, 100);
  const diff = randomGenerator(1, 10);
  const length = randomGenerator(5, 10);
  const position = randomGenerator(0, length - 1);
  const progression = generateProgression(start, diff, length);
  progression[position] = '..';
  const progressionStr = progression.join(' ');
  const correctAnswer = start + (position * diff);
  return [progressionStr, correctAnswer];
};

const generateRound = () => {
  const question = generateQuestion();
  const answer = String(question[1]);
  return [question[0], answer];
};

export default () => {
  const rules = 'What number is missing in the progression?';
  runEngine(rules, generateRound);
};
