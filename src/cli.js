import commander from 'commander';
import Table from 'terminal-table';

import datastore from './datastore';

export async function cli(args) {
  const program = new commander.Command();
  program.version('0.0.1');

  program
    .option('-d, --debug', 'output extra debugging')
    .option('-f, --format <format>', 'format')

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
