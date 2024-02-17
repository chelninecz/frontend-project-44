import { askNameAndGreet, askQuestionGetAnswer, calcScore } from '../src/index.js';

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
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
  const start = randomNumber(1, 100);
  const diff = randomNumber(1, 10);
  const length = randomNumber(5, 10);
  const position = randomNumber(0, length - 1);
  const progression = generateProgression(start, diff, length);
  progression[position] = '..';
  const progressionStr = progression.join(' ');
  const correctAnswer = start + (position * diff);
  return [progressionStr, correctAnswer];
};

export default () => {
  const name = askNameAndGreet();
  console.log('What number is missing in the progression?');
  let score = 0;
  let playing = true;
  while (playing) {
    const [question, correctAnswer] = generateQuestion();
    const answer = askQuestionGetAnswer(question);
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
