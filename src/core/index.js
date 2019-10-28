const base_ac = {
  no_armor: 10,
  leather_armour: 11,
  chain_shirt: 13,
  plate_mail: 18,
  mage_armour_spell: 13,
  barbarian_unarmoured_defense_ability: 10,
  monk_unarmoured_defense_ability: 10,
  sorcerer_draconic_resilience_ability: 13
}

function ac({
  armor = 'no_armor',
  dexterity_modifier = 0,
  constitution_modifier = 0,
  wisdom_modifier = 0,
  shield = false,
  half_cover = false
} ) {

  // max dex 2
  // TODO: Implement data structure armor.json
  // if (type === 'Medium Armor' && dexterity_modifier > 2) {
  //  dexterity_modifier = 2;
  // }


  // if (type === 'Heavy Armor') {
  //  dexterity_modifier = 0; // ignore dex
  // }

  let ac_total = base_ac[armor] +
    ((armor === 'plate_mail') ? 0 : dexterity_modifier) +
    ((armor === 'barbarian_unarmoured_defense_ability') ? dexterity_modifier + constitution_modifier: 0) +
    ((armor === 'monk_unarmoured_defense_ability') ? dexterity_modifier + wisdom_modifier : 0);

  if (half_cover) {
    ac_total = ac_total + 2;
  }

  if (shield) {
    ac_total = ac_total + 2;
  }
  return ac_total;
}

module.exports = {
  ac
}
