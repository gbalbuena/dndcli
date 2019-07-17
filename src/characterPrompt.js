import inquirer from 'inquirer';
import d from './datastore'

const deafults = {
  name: 'Unknown Adventurer'
}

export async function prompt() {
  const questions = [];
  questions.push({
    type: 'input', name: 'name', message: 'Name of your adventurer?', default: deafults.name
  });

  questions.push({
    type: 'list',
    message: 'Please choose a class?',
    name: 'class',
    choices: d.classes.getAll().map((e, i) => {
      return { name: `${e.name} - ${e.description}`, value: e.name, short: e.name };
    })
  });

  questions.push({
    type: 'list',
    name: 'race',
    message: 'Please choose which race would you like to be?',
    choices: d.races.getAll().map((e, i) => {
      return { name: `${e.name} - ${e.description}`, value: e.name, short: e.name };
    })
  });

  questions.push({
    type: 'checkbox',
    name: 'equipment',
    message: '⚔Please choose your initial equipment?',
    choices: d.equipment.getAll().map((e, i) => {
      return { name: `${e.name}\n   ${e.description}`, value: e.name, short: e.name };
    })
  });

  questions.push({
    type: 'confirm',
    name: 'confirm',
    default: 'Y',
  });

  const character = await inquirer.prompt(questions);
  return character;
}
