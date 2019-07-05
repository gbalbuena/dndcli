import inquirer from 'inquirer';

async function prompt() {
  const questions = [];
    questions.push({
      type: 'input',
      name: 'name',
      message: 'Name of your adventurer?',
      default: 'Unknown Adventurer'
    });

    questions.push({
      type: 'list',
      name: 'race',
      message: 'Please choose which race would you like to be?',
      choices: ['Human', 'Developer'],
      default: 'Human',
    });


  const character = await inquirer.prompt(questions);
  return character;
 }

export async function cli(args) {
  let options = await prompt();
  console.log(options);
 }
