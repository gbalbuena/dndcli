import inquirer from 'inquirer';
import d from './datastore'
import combatant from './services/combatantService';

export async function prompt() {
  const d20 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  const questions1 = [];
  questions1.push({
    prefix: '💪',
    type: 'list',
    message: 'Ability?',
    name: 'ability',
    choices: Object.keys(d.core().skills).map((s) => s)
  });
  const data1 = await inquirer.prompt(questions1);

  const ability_score = d.core().skills[data1['ability']].modifier;
  const questions2 = [];
  questions2.push({
    prefix: '✨',
    type: 'input',
    message: `${ability_score}?`,
    name: 'ability_score',
  });

  questions2.push({
    prefix: '🎲',
    type: 'list',
    message: `d20 Roll?`,
    name: 'roll',
    choices: d20
  });
  const data2 = await inquirer.prompt(questions2);
  console.log(data2)
  const modifier = combatant.getModifier(parseInt(data2.ability_score));
  console.log()
  return;
}
