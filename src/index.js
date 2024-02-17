import readlineSync from 'readline-sync';

export const askNameAndGreet = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const askQuestionGetAnswer = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

export const calcScore = (isCorrect, answer, corrAnswer, name) => {
  if (isCorrect) {
    console.log('Correct!');
    return 1;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${corrAnswer}`);
  console.log(`Let's try again, ${name}!`);
  return 0;
};
