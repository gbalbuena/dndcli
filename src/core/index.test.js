const dnd = require('./');

describe('ac', () => {
  describe('none', () => {
    test('no armor', () => {
      expect(dnd.ac({ armorId: 'no_armor', dexterity_modifier: -1 })).toEqual(9);

      expect(dnd.ac({ armorId: 'no_armor', dexterity_modifier: 0 })).toEqual(10);
      expect(dnd.ac({ armorId: 'no_armor', dexterity_modifier: 1 })).toEqual(11);
      expect(dnd.ac({ armorId: 'no_armor', dexterity_modifier: 2 })).toEqual(12);
      expect(dnd.ac({ armorId: 'no_armor', dexterity_modifier: 3 })).toEqual(13);

      expect(dnd.ac({ armorId: 'no_armor', dexterity_modifier: 1, half_cover: true })).toEqual(13);
      expect(dnd.ac({ armorId: 'no_armor', dexterity_modifier: 1, shield: true })).toEqual(13);
    });
  });
  describe('light Armor', () => {
    test('leather armour', () => {
      expect(dnd.ac({ armorId: 'leather_armour', dexterity_modifier: -1 })).toEqual(10);

      expect(dnd.ac({ armorId: 'leather_armour', dexterity_modifier: 0 })).toEqual(11);
      expect(dnd.ac({ armorId: 'leather_armour', dexterity_modifier: 1 })).toEqual(12);
      expect(dnd.ac({ armorId: 'leather_armour', dexterity_modifier: 2 })).toEqual(13);
      expect(dnd.ac({ armorId: 'leather_armour', dexterity_modifier: 3 })).toEqual(14);

      expect(dnd.ac({ armorId: 'leather_armour', dexterity_modifier: 1, half_cover: true })).toEqual(14);
      expect(dnd.ac({ armorId: 'leather_armour', dexterity_modifier: 1, shield: true })).toEqual(14);
    });
  });
  describe('medium Armor', () => {
    test('hide', () => {
      expect(dnd.ac({ armorId: 'hide', dexterity_modifier: -1 })).toEqual(11);

      expect(dnd.ac({ armorId: 'hide', dexterity_modifier: 0 })).toEqual(12);
      expect(dnd.ac({ armorId: 'hide', dexterity_modifier: 1 })).toEqual(13);
      expect(dnd.ac({ armorId: 'hide', dexterity_modifier: 2 })).toEqual(14);
      expect(dnd.ac({ armorId: 'hide', dexterity_modifier: 3 })).toEqual(14); // max dex +2

      expect(dnd.ac({ armorId: 'hide', dexterity_modifier: 1, half_cover: true })).toEqual(15);
      expect(dnd.ac({ armorId: 'hide', dexterity_modifier: 1, shield: true })).toEqual(15);
    });
  });
  describe('heavy armor', () => {
    test('plate mail', () => {
      expect(dnd.ac({ armorId: 'plate_mail', dexterity_modifier: -1 })).toEqual(18);

      expect(dnd.ac({ armorId: 'plate_mail', dexterity_modifier: 0 })).toEqual(18);
      expect(dnd.ac({ armorId: 'plate_mail', dexterity_modifier: 1 })).toEqual(18);
      expect(dnd.ac({ armorId: 'plate_mail', dexterity_modifier: 2 })).toEqual(18);
      expect(dnd.ac({ armorId: 'plate_mail', dexterity_modifier: 3 })).toEqual(18);

      expect(dnd.ac({ armorId: 'plate_mail', dexterity_modifier: 1, half_cover: true })).toEqual(20);
      expect(dnd.ac({ armorId: 'plate_mail', dexterity_modifier: 1, shield: true })).toEqual(20);
    });
  });
})
