#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;

const getRandomInt = (max) => Math.floor(Math.random() * max + 1);
export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let score = 0;
  for (let i = 0; i < 3; i += 1) {
    const question = getRandomInt(100);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    if ((isEven(question) && answer === 'yes') || (!isEven(question) && answer === 'no')) {
      console.log('Correct!');
      score += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (score === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
};
