import arg from 'arg';
import TerminalTable from 'terminal-table';

import versionService from './lib/versionService';
import creatures from './datastore/creatures';
import character from './datastore/character';
import weapons from './datastore/weapons';
import d from './datastore';

import * as creaturePrompt from './creaturePrompt';
import * as combatPrompt from './combatPrompt';
import * as characterPrompt from './characterPrompt';

import combatantService from './services/combatantService';
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
    const combatants = {
      players: [ 'quixote' ],
      monsters: [ 'evil-chicken' ]
    }
    // const result = await combatPrompt.prompt(combatants);
    // console.log(result);
  }

  else if (options['_'].includes('creatures') || options['_'].includes('monster')) {
    if (options['_'].includes('ls')) {
      if (options["--name"]) {
        const creature = await creatures.findByName(options["--name"]);
        console.log(creature);
      }
    }

    else if (options['_'].includes('create')) {
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

    else if (options['_'].includes('levelup')) {
      let data;
      try {
        data = await character.findByName(options["--name"]);
        console.log(JSON.stringify(data, null, 2));
        data.level = data.level+1
        character.save(options["--name"], data);
      } catch (error) {
        console.error(error);
        process.exit(1);
      }
    }

    else if (options['_'].includes('ls')) {
      if (options["--name"]) {
        let data;
        try {
          data = await character.findByName(options["--name"]);
        } catch (error) {
          console.error(error);
          process.exit(1);
        }

        console.log();
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
        tt.push(['Name', data.name]);
        tt.push(['Race', data.race]);
        tt.push(['Armor Class', data.armorClass]);
        tt.push(['Hit Points', data.hitPoints]);

        tt.push(['Ability Scores']);
        tt.push([' - strength', `${data.ability_scores['strength']} (${combatantService.getModifier(data.ability_scores['strength'])})`]);
        tt.push([' - dexterity', `${data.ability_scores['dexterity']} (${combatantService.getModifier(data.ability_scores['dexterity'])})`]);
        tt.push([' - constitution', `${data.ability_scores['constitution']} (${combatantService.getModifier(data.ability_scores['constitution'])})`]);
        tt.push([' - intelligence', `${data.ability_scores['intelligence']} (${combatantService.getModifier(data.ability_scores['intelligence'])})`]);
        tt.push([' - wisdom', `${data.ability_scores['wisdom']} (${combatantService.getModifier(data.ability_scores['wisdom'])})`]);
        tt.push([' - charisma', `${data.ability_scores['strength']} (${combatantService.getModifier(data.ability_scores['charisma'])})`]);

        tt.push(['Skills', data.skills_proficiency]);
        tt.push(['initiative', data.initiative]);
        tt.push(['defenses', data.defenses]);
        tt.push(['proficiencies']);
        tt.push([' - armor', data.proficiencies['armor'].map((obj) => obj)]);
        tt.push([' - weapons', data.proficiencies['weapons'].map((obj) => obj)]);
        tt.push([' - tools', data.proficiencies['tools'].map((obj) => obj)]);
        tt.push([' - languages', data.proficiencies['languages'].map((obj) => obj)]);

        tt.push(['Conditions', Object.keys(data.conditions)
          .filter((condition) => data.conditions[condition] > 0)
          .map((condition) => `${condition} (${data.conditions[condition]})`)
          ]);

        console.log(`${tt}`);
      }
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
      tt.attrRange({ row: [0, 1] }, { align: "center", color: "white", bg: "black" });
      weapons.getAll()
        .map((w) => tt.push([w.name, w.category, w.cost, w.damage, w.weight, w.properties]));
      console.log(`${tt}`);
    }
  }

  else if (options['_'].includes('skills')) {
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
      tt.push(['Name', 'Modifier']);
      tt.attrRange({ row: [0, 1] }, { align: "center", color: "white", bg: "black" });
      Object.keys(d.core.skills).map((skill) => tt.push([skill, d.core.skills[skill]['modifier']]));
      console.log(`${tt}`);
    }
  }
 }
