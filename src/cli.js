import program from 'commander';
import p from '../package.json';

import combatant from './services/combatantService';
import dice from './services/diceRollService';
import d from './datastore';

export async function cli(args) {
  program
    .version(p.version)
    .option('-d, --debug', 'output extra debugging');

  // GAME MECHANICS commands

  program
    .command('abilitycheck [ability]')
    .alias('ac')
    .description('get ability check')
    .option('-a, --abilityscore <number>', 'ability score', 10)
    .option('-r, --roll <number>', 'dice roll value', dice.d20())
    .action((ability, options) => {
      const skills = d.core().skills;
      const abilities = Object.keys(skills);
      const roll = parseInt(options.roll);
      const abilityscore = parseInt(options.abilityscore);
      if (abilities.includes(ability)) {
        console.log(`Making a ${skills[ability].modifier} (${ability}=${abilityscore}) check:`)
        const modifier = combatant.getModifier(abilityscore);
        console.log();
        console.log(` > roll(${roll}) + modifier(${modifier}) = ${abilityscore + modifier}`)
        console.log();
      } else {
        console.error(`${ability} not found in ability list`);
      }
    });

  // DATA Commands

  program
    .command('classes [action]')
    .description('show and describe classes')
    .action((action, opts) => {
      console.log(JSON.stringify(d.classes));
    });

  program
    .command('core [action]')
    .description('show and describe classes')
    .action((action, opts) => {
      console.log(JSON.stringify(d.core()));
    });

  program
    .command('creatures [action]')
    .alias('monsters')
    .description('show and describe creatures')
    .action((action, opts) => {
    });

  program
    .command('races [action]')
    .description('show and describe races')
    .action((action, opts) => {});

  program
    .command('weapons [name]')
    .description('show and describe weapons')
    .action((name, opts) => {
      console.log(JSON.stringify(d.weapons.all()));
    });

  program.parse(process.argv);
  if (program.debug) console.log(program.opts());
}
