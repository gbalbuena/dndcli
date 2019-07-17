import arg from 'arg';
import TerminalTable from 'terminal-table';

import versionService from './lib/versionService';
import creatures from './datastore/creatures';
import weapons from './datastore/weapons';

import * as creaturePrompt from './creaturePrompt';
import * as combatPrompt from './combatPrompt';
import * as characterPrompt from './characterPrompt';
import initService from './services/initService';

export async function cli(args) {
  const options = arg({
    // Types
    '--version':    Boolean,
    '--verbose':    Boolean,
    '--help':       Boolean,

    '--name':       String,

    // Aliases
    '-v':        '--version',
    '-h':        '--help'
  }, args);

  if (options["--version"]) {
    console.log(versionService.getVersion());
  }

  if (options["--verbose"]) {
    console.log('options: ', options);
  }

  if (options['_'].includes('init')) {
    await initService.initializeData({});
  }

  else if (options['_'].includes('combat')) {
    const result = await combatPrompt.prompt();
    console.log(result);
  }

  else if (options['_'].includes('creature')) {
    if (options['_'].includes('find')) {
      if (options["--name"]) {
        console.log(await creatures.findByName(options["--name"]));
      }
    } else if (options['_'].includes('create')) {
      const newCreature = await creaturePrompt.prompt({
        name: options["--name"]
      });
      creatures.save(newCreature);
    }
  }

  else if (options['_'].includes('character')) {
    if (options['_'].includes('create')) {
      const newPlayer = await characterPrompt.prompt({
        name: options["--name"]
      });
      console.log(newPlayer);
      // creatures.save(newPlayer);
    }
  }

  else if (options['_'].includes('weapons')) {
    if (options['_'].includes('ls')) {
      var tt = new TerminalTable({
        horizontalLine: true,
        borderStyle: 0,
        border: {
          sep: "│",
          topLeft: "┌", topMid: "┬", top: "─", topRight: "┐",
          midLeft: "├", midMid: "┼", mid: "─", midRight: "┤",
          botLeft: "└", botMid: "┴", bot: "─", botRight: "┘"
        }
      });
      tt.push(['Name', 'Category', 'Cost', 'Damage', 'Weight', 'Properties']);
      tt.attrRange({row: [0, 1]}, {
        align: "center",
        color: "black",
        bg: "white"
      });
      weapons.getAll()
        .sort((a, b) => a.name > b.name ? 1 : -1)
        .map((w) => tt.push([w.name, w.category, w.cost, w.damage, w.weight, w.properties]));

      console.log(`${tt}`);
    }
  }
 }
