import program from 'commander';
import p from '../package.json';
import version from './lib/versionService'

import * as abilityCheck from './abilityCheckPrompt';


import dice from './services/diceRollService';
import d from './datastore';
import { format, source } from './config';

export async function cli(args) {
  console.log(version.getVersion());
  program
    .version(p.version)
    .option('-d, --debug', 'output extra debugging')

  // GAME MECHANICS commands

  program
    .command('config')
    .alias('conf')
    .description('get configuration')
    .action((opts) => {
      console.log({  format: format(), source: source() });
    });

  program
    // .command('abilitycheck [ability]')
    .command('abilitycheck [action]')
    .alias('ac')
    .description('get ability check')
    .option('-r, --raw', 'output json in raw json')
    .action((action, opts) => {
      if (action === 'ls') {
        const skills = d.core().skills;
        if (opts.raw) {
          console.log(JSON.stringify(skills));
        } else {
          console.log(skills);
        }
      }
      abilityCheck.prompt();
      // console.log(ls);
      // console.log(ability);
      // const skills = d.core().skills;
      // const abilities = Object.keys(skills);
      // const roll = parseInt(opts.roll);
      // const abilityscore = parseInt(opts.abilityscore);
      // if (abilities.includes(ability)) {
      //   console.log(`Making a ${skills[ability].modifier} (${ability}=${abilityscore}) check:`)
      //   const modifier = combatant.getModifier(abilityscore);
      //   console.log();
      //   console.log(` > roll(${roll}) + modifier(${modifier}) = ${abilityscore + modifier}`)
      //   console.log();
      // } else {
      //   console.error(`${ability} not found in ability list`);
      //   console.log(abilities)
      // }
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

  program.parse(args);
  if (program.debug) console.log(program.opts());
}
