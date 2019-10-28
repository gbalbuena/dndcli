import commander from 'commander';
import Table from 'terminal-table';

import core from './core';
import datastore from './datastore';

export async function cli(args) {
  const program = new commander.Command();
  program.version('0.0.1');

  program
    .option('--debug', 'output extra debugging')
    .option('-f, --format <format>', 'format')

  program
    .command('ac')
    .description('calculate ac')
    .option('-a, --armor_id <id>', 'armor_id')
    .option('-d, --dexterity_modifier <number>', 'dexterity_modifier')
    .option('-c, --constitution_modifier <number>', 'constitution_modifier')
    .option('-w, --wisdom_modifier <number>', 'wisdom_modifier')
    .option('-s, --shield <value>', 'with shield')
    .option('-h, --half_cover <value>', 'half_cover', false)
    .action((opts) => {
      const args = {
        armor_id: opts.armor_id,
        dexterity_modifier: parseInt(opts.dexterity_modifier),
        constitution_modifier: parseInt(opts.constitution_modifier),
        wisdom_modifier: parseInt(opts.wisdom_modifier),
        shield: parseInt(opts.shield) === 1 ? true : false,
        half_cover: parseInt(opts.half_cover) === 1 ? true : false,
      };

      if (program.debug) console.log(args);
      console.log(JSON.stringify({ ac: core.ac(args) }));
    });

  program
    .command('armor')

    .description('show armor')
    .action(() => {
      if (program.format === 'json') {
        console.log(JSON.stringify(datastore.armor));
        return;
      }

      var t = new Table();
      t.push(['Name', 'Type', 'A.C.', 'Cost', 'weight', 'Disadvantage']);
      datastore.armor.forEach((item) => {
        t.push([item.name, item.type, item.ac, item.cost, item.weight, item.disadvantage]);
      });
      t.attrRange({ row: [0, 1] }, { align: "center" });
      console.log('' + t);
    });

  program.parse(args);
  if (program.debug) console.log(program.opts());
}
