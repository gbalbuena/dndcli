import arg from 'arg';
import inquirer from 'inquirer';

import versionService from './lib/versionService';

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

  questions.push({
    type: 'confirm',
    name: 'confirm',
    default: 'Y',
  });

  const character = await inquirer.prompt(questions);
  return character;
}

export async function cli(args) {
  const options = arg({
    // Types
    '--version': Boolean,
    '--help':    Boolean,

    // Aliases
    '-v':        '--version',
    '-h':        '--help'
  }, args);

  console.log(options);

  if (options["--version"]) {
    console.log(versionService.getVersion());
  }


  // let options = await prompt();
  // console.log(options);
 }
