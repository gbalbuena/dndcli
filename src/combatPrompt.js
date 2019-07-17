import inquirer from 'inquirer';
import d from './datastore'

// Combat Step by Step

// 1) Determine surprise.
// The GM determines whether anyone involved in the combat encounter is surprised.

// 2) Establish positions.
// The GM decides where all the characters and monsters are located. Given the adventurers’ marching order or their stated positions in the room or other location, the GM figures out where the adversaries are̶ how far away and in what direction.

// 3) Roll initiative.
// Everyone involved in the combat encounter rolls initiative, determining the order of combatants’ turns.

// 4) Take turns. Each participant in the battle takes a turn in initiative order.

//   <combatants loop>

// 5) Begin the next round. When everyone involved in the combat has had a turn, the round ends. Repeat step 4 until the fighting stops.

/**
 * The GM determines whether anyone involved in the combat encounter is surprised.
 *
 * @param {*} combatants
 */
async function determineSurprise(combatants) {
  const questions = [];
  questions.push({
    type: 'checkbox',
    message: 'Select surprised combatant?',
    name: 'surprised',
    choices: combatants
  });
  const resoult = await inquirer.prompt(questions);
  return resoult;
/**

checkbox
[
  { combatant: { name '' }, surprised: true },
  { combatant: { name '' }, surprised: false }
]

 */
}


export async function prompt() {

  const surprised = await determineSurprise([
    { name: 'Don quixote de la mancha', value: 'quixote', short: 'Quixote' },
    { name: 'Chicken', value: 'chicken', short: 'Chicken' },
    { name: 'Evil Chicken', value: 'evil-chicken', short: 'Evil Chicken' },
  ]);

  const questions = [];
  questions.push({
    type: 'list',
    message: 'What do you wanna do (first)?',
    name: 'turn_actions',
    choices: d.core.actions_in_turn
  });
  return inquirer.prompt(questions);

  // questions.push({
  //   type: 'list',
  //   message: 'action?',
  //   name: 'action',
  //   choices: d.core.actions_in_combat
  // });

  // questions.push({
  //   type: 'list',
  //   message: 'Bonus Action?',
  //   name: 'bonus_action',
  //   choices: [ { name: 'tbd' }]
  // });



  // questions.push({
  //   type: 'confirm',
  //   name: 'confirm',
  //   default: 'Y',
  // });

  // const resoult = await inquirer.prompt(questions);
  // return resoult;
}
