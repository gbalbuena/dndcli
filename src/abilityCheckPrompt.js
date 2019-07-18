import inquirer from 'inquirer';
import d from './datastore'

export async function prompt() {
  const questions = [];

  questions.push({
    type: 'list',
    message: 'Make a Wisdom (Perception) check?',
    name: 'class',
    choices: d.classes.getAll().map((e, i) => {
      return { name: `${e.name}`, value: e.name, short: e.name };
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
    choices: d.weapons.getAll().map((e, i) => {
      return { name: `${e.name} - ${e.damage}`, value: e.name, short: e.name };
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
