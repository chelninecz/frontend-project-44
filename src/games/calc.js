import runEngine from '../index.js';
import randomGenerator from '../randomGenerator.js';

// Generates a random math question by picking two numbers and an operator
const generateQuestion = () => {
  const num1 = randomGenerator();
  const num2 = randomGenerator();
  const operators = ['+', '-', '*']; // List of supported operators
  const operator = operators[randomGenerator(0, operators.length - 1)];
  // Combine the numbers and the operator into a string
  const question = `${num1} ${operator} ${num2}`;
  return question;
};

// Calculate the correct answer based on the given question
const correctAnswer = (question) => {
  const [num1, operator, num2] = question.split(' ');

  switch (operator) {
    case '+': return Number(num1) + Number(num2);
    case '-': return Number(num1) - Number(num2);
    case '*': return Number(num1) * Number(num2);
    default: throw new Error(`Invalid operator - ${operator}`);
  }
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
  const rules = 'What is the result of the expression?';
  runEngine(rules, generateRound);
};
