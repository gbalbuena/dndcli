const dnd = require('./');

describe('ac', () => {
  test('No Armour', () => {
    expect(dnd.ac({ armor: 'no_armor', dexterity_modifier: -1 })).toEqual(9);
    expect(dnd.ac({ armor: 'no_armor', dexterity_modifier: 0 })).toEqual(10);
    expect(dnd.ac({ armor: 'no_armor', dexterity_modifier: 1 })).toEqual(11);
    expect(dnd.ac({ armor: 'no_armor', dexterity_modifier: 1, half_cover: true })).toEqual(13);
    expect(dnd.ac({ armor: 'no_armor', dexterity_modifier: 1, shield: true })).toEqual(13);
  });

  test('Leather Armour', () => {
    expect(dnd.ac({ armor: 'leather_armour', dexterity_modifier: -1 })).toEqual(10);
    expect(dnd.ac({ armor: 'leather_armour', dexterity_modifier: 0 })).toEqual(11);
    expect(dnd.ac({ armor: 'leather_armour', dexterity_modifier: 1 })).toEqual(12);
    expect(dnd.ac({ armor: 'leather_armour', dexterity_modifier: 1, half_cover: true })).toEqual(14);
    expect(dnd.ac({ armor: 'leather_armour', dexterity_modifier: 1, shield: true })).toEqual(14);
  });

  test('Chain Shirt', () => {
    expect(dnd.ac({ armor: 'chain_shirt', dexterity_modifier: -1 })).toEqual(12);
    expect(dnd.ac({ armor: 'chain_shirt', dexterity_modifier: 0 })).toEqual(13);
    expect(dnd.ac({ armor: 'chain_shirt', dexterity_modifier: 1 })).toEqual(14);
    expect(dnd.ac({ armor: 'chain_shirt', dexterity_modifier: 1, half_cover: true })).toEqual(16);
    expect(dnd.ac({ armor: 'chain_shirt', dexterity_modifier: 1, shield: true })).toEqual(16);
  });

  test('Plate Mail', () => {
    expect(dnd.ac({ armor: 'plate_mail', dexterity_modifier: -1 })).toEqual(18);
    expect(dnd.ac({ armor: 'plate_mail', dexterity_modifier: 0 })).toEqual(18);
    expect(dnd.ac({ armor: 'plate_mail', dexterity_modifier: 1 })).toEqual(18);
    expect(dnd.ac({ armor: 'plate_mail', dexterity_modifier: 1, half_cover: true })).toEqual(20);
    expect(dnd.ac({ armor: 'plate_mail', dexterity_modifier: 1, shield: true })).toEqual(20);
  });
})
