import {
  startEncounter, initiativeRoll
} from './combatEncounterService';

describe.only('combat encounter service', () => {
  const combatant1 = { name: 'aaa', abilityScore: { dexterity: 16 } };
  const combatant2 = { name: 'bbb', abilityScore: { dexterity: 14 } };
  const combatant3 = { name: 'ccc', abilityScore: { dexterity: 12 } };
  const combatant4 = { name: 'ddd', abilityScore: { dexterity: 10 } };

  test('initiative check', () => {
    expect(initiativeRoll(combatant1, 20)).toEqual(23);
  });

  test('start', () => {
    const encounter = startEncounter([
      { combatant: combatant1, roll: 10 },
      { combatant: combatant2, roll: 11 },
      { combatant: combatant3, roll: 12 },
      { combatant: combatant4, roll: 13 }
    ]);

    expect(encounter.map((v) => v.combatant.name )).toEqual([ 'ddd', 'ccc', 'bbb', 'aaa']);
    expect(encounter.map((v) => v.roll )).toEqual([ 13, 12, 11, 10 ]);
  });
});
