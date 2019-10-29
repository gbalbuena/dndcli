import datastore from '../datastore/index';

function attack({
  weapon_name         = 'Javelin',
  weapon_damage_die   = 1,
  weapon_damage_bonus = 0,
  proficiency_bonus   = 0,
  dexterity_modifier  = 0,
  strenght_modifier   = 0,
  finesse             = false
}) {
  const weapon = datastore.weapons.find((weapon) => weapon.name === weapon_name);

  if (weapon.properties.includes("finesse") && finesse) {
    return weapon_damage_die + weapon_damage_bonus + proficiency_bonus + dexterity_modifier;
  }
  return weapon_damage_die + weapon_damage_bonus + proficiency_bonus + strenght_modifier;
}

function ac({
  armor_id              = 'no_armor',
  dexterity_modifier    = 0,
  constitution_modifier = 0,
  wisdom_modifier       = 0,
  shield                = false,
  half_cover            = false
} ) {
  const armor = datastore.armor.find((armor) => armor.id === armor_id);

  armor.modifier.forEach((mod) => {
    if (mod.ability === 'dexterity' && mod.max !== null && dexterity_modifier > mod.max) {
      dexterity_modifier = mod.max; // max ability_modifier = 2
    }
    if (mod.ability === 'constitution' && mod.max !== null && constitution_modifier > mod.max) {
      constitution_modifier = mod.max; // max ability_modifier = 2
    }
    if (mod.ability === 'wisdom' && mod.max !== null && wisdom_modifier > mod.max) {
      wisdom_modifier = mod.max; // max ability_modifier = 2
    }
  });

  if (armor.type === 'Heavy Armor') {
    dexterity_modifier = 0; // ignore dex
  }


  let ac_total = armor.ac;
  armor.modifier.forEach((mod) => {
    if (mod.ability === 'dexterity') {
      ac_total = ac_total + dexterity_modifier;
    }
    if (mod.ability === 'constitution') {
      ac_total = ac_total + constitution_modifier;
    }
    if (mod.ability === 'wisdom') {
      ac_total = ac_total + wisdom_modifier;
    }
  });

  if (half_cover) {
    ac_total = ac_total + 2;
  }

  if (shield) {
    ac_total = ac_total + 2;
  }
  return ac_total;
}

export default {
  ac,
  attack
}
