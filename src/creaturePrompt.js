import inquirer from 'inquirer';

const defaults = {
  name: 'Unknown Creature',
  abilityScores: {
    strength: 15,
    dexterity:  14,
    constitution: 13,
    intelligence: 12,
    wisdom: 10,
    charisma: 8
  },
  armorClass: 10,
  hitPoints: '1 (1d4 - 1)',
  challenge: '0xp'
};

export async function prompt(creature) {
  const questions = [];

  creature = { ...defaults, ...creature };
  console.log(creature);

  questions.push({ type: 'input', name: 'name',
    message: 'What is the name of the creature?', default: creature.name });
  questions.push({ type: 'number', name: 'abilityScores.strength',
    message: 'Strength?', default: creature.abilityScores.strength });
  questions.push({ type: 'number', name: 'abilityScores.dexterity',
    message: 'Dexterity?', default: creature.abilityScores.dexterity });
  questions.push({ type: 'number', name: 'abilityScores.constitution',
    message: 'Constitution?', default: creature.abilityScores.constitution });
  questions.push({ type: 'number', name: 'abilityScores.intelligence',
    message: 'Intelligence?', default: creature.abilityScores.intelligence });
  questions.push({ type: 'number', name: 'abilityScores.wisdom',
    message: 'Wisdom?', default: creature.abilityScores.wisdom });
  questions.push({ type: 'number', name: 'abilityScores.charisma',
    message: 'Charisma?', default: creature.abilityScores.charisma });
  questions.push({ type: 'number', name: 'armorClass',
    message: 'Armor Class?', default: creature.armorClass });
  questions.push({ type: 'input', name: 'hitPoints',
    message: 'Hit Points?', default: creature.hitPoints });
  questions.push({ type: 'input', name: 'challenge',
    message: 'Challenge?', default: creature.challenge });

  const confirmation = [];
  creature = await inquirer.prompt(questions);
  console.log(creature);

  confirmation.push({ type: 'confirm', name: 'confirm', default: 'Y', });
  await inquirer.prompt(confirmation);

  return creature;
}
