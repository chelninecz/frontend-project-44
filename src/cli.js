import readlineSync from 'readline-sync';

// This function greets the users with a welcome message and asks for their name
// to personalize the interaction.
export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
