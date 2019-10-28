import commander from 'commander';
import Table from 'terminal-table';


import datastore from './datastore';
// import { format, source } from './config';

export async function cli(args) {
  const program = new commander.Command();
  program.version('0.0.1');

  program
    .option('-d, --debug', 'output extra debugging')

  program
    .command('armor')
    .description('show armor')
    .action(() => {
      var t = new Table();
      datastore.armor.forEach((item) => {
        t.push([item.id, item.name, item.type, item.ac, ]);
      });
      console.log('' + t)
    });

  program.parse(args);
  if (program.debug) console.log(program.opts());
}
