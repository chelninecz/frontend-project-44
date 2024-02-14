import readlineSync from 'readline-sync';

const generateQuestion = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${num1} ${operator} ${num2}`;
  return question;
};
const correctAnswer = (question) => {
  const [num1, operator, num2] = question.split(' ');
  let result;

  switch (operator) {
    case '+':
      result = Number(num1) + Number(num2);
      break;
    case '-':
      result = Number(num1) - Number(num2);
      break;
    case '*':
      result = Number(num1) * Number(num2);
      break;
    default:
      result = 'Invalid operator';
  }

  return result;
};
export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  let score = 0;
  for (let i = 0; i < 3; i += 1) {
    const question = generateQuestion();
    console.log(`Question: ${question}`);
    const answer = parseInt(readlineSync.question('Your answer: '), 10);
    if (correctAnswer(question) === answer) {
      console.log('Correct!');
      score += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer(question)}`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (score === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
};
