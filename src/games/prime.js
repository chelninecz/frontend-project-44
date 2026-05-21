import runEngine from '../index.js';
import randomGenerator from '../randomGenerator.js';

// This function checks if a number is prime
const isPrime = (num) => {
  // If the number is less than or equal to 1, it's not prime
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  // We only need to check up to the square root of the number
  // Check only numbers of form 6k ± 1 for better performance
  const limit = Math.floor(Math.sqrt(num));
  for (let i = 5; i <= limit; i += 6) {
    // If the number is divisible by any other number, it's not prime
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  // If we've reached this point, the number is prime
  return true;
};

// Generate a round by generating a question and its answer
const generateRound = () => {
  const question = randomGenerator();
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

// Export the default function, which sets up the game rules and runs the engine
// with the generateRound function
export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runEngine(rules, generateRound);
};
