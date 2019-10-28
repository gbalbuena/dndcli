import program from 'commander';
import package from '../package.json';

import datastore from './datastore';
import { format, source } from './config';

export async function cli(args) {
  console.log(version.getVersion());
  program
    .version(package.version)
    .option('-d, --debug', 'output extra debugging')

  program
    .command('config')
    .alias('conf')
    .description('show configuration')
    .action((opts) => {
      console.log({  format: format(), source: source() });
    });

  program
    .command('armor')
    .description('show armor')
    .action((name, opts) => {
      console.log(datastore.armor);
    });

  program.parse(args);
  if (program.debug) console.log(program.opts());
}
