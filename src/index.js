import readline from 'readline-sync';
// Define the number of rounds for the game engine
const roundsCount = 3;

/**
 * The main function that runs the game engine
 * @param {function} rules A function that prints the game rules
 * @param {function} generateRound A function that generates a round of the game
 */
const runEngine = (rules, generateRound) => {
  // Prompt the users for their name and store it in the 'name' variable
  const name = readline.question('May I have your name? ');
  // Greet the users with their provided name
  console.log(`Hello, ${name}!`);
  // Print the rules of the game
  console.log(rules);

  // Loop through the disired number of rounds
  for (let i = 0; i < roundsCount; i += 1) {
    // Generate a single round, which consists of a question and an answer
    const [question, answer] = generateRound();

    // Prompt the users for their answer to the current question
    const userAnswer = readline.question(`Question: ${question}\nYour answer: `);
    // Check if the user's answer is correct
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      // Notify the users that their answer is incorrect and provide the correct answer
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      // Encourage the users to try again
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  // Notify the users that they have successfully completed the game
  console.log(`Congratulations, ${name}!`);
};
export default runEngine;
