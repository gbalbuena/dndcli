import dnd from './index';

describe('ac', () => {
  describe('none', () => {
    test('no armor', () => {
      const armor_id = 'no_armor';
      expect(dnd.ac({ armor_id, dexterity_modifier: -1 })).toEqual(9);

      expect(dnd.ac({ armor_id, dexterity_modifier: 0 })).toEqual(10);
      expect(dnd.ac({ armor_id, dexterity_modifier: 1 })).toEqual(11);
      expect(dnd.ac({ armor_id, dexterity_modifier: 2 })).toEqual(12);
      expect(dnd.ac({ armor_id, dexterity_modifier: 3 })).toEqual(13);

      expect(dnd.ac({ armor_id, dexterity_modifier: 1, half_cover: true })).toEqual(13);
      expect(dnd.ac({ armor_id, dexterity_modifier: 1, shield: true })).toEqual(13);
    });
  });
  describe('light Armor', () => {
    test('leather armour', () => {
      const armor_id = 'leather_armour'
      expect(dnd.ac({ armor_id, dexterity_modifier: -1 })).toEqual(10);

      expect(dnd.ac({ armor_id, dexterity_modifier: 0 })).toEqual(11);
      expect(dnd.ac({ armor_id, dexterity_modifier: 1 })).toEqual(12);
      expect(dnd.ac({ armor_id, dexterity_modifier: 2 })).toEqual(13);
      expect(dnd.ac({ armor_id, dexterity_modifier: 3 })).toEqual(14);

      expect(dnd.ac({ armor_id, dexterity_modifier: 1, half_cover: true })).toEqual(14);
      expect(dnd.ac({ armor_id, dexterity_modifier: 1, shield: true })).toEqual(14);
    });
  });
  describe('medium Armor', () => {
    test('hide', () => {
      expect(dnd.ac({ armor_id: 'hide', dexterity_modifier: -1 })).toEqual(11);

      expect(dnd.ac({ armor_id: 'hide', dexterity_modifier: 0 })).toEqual(12);
      expect(dnd.ac({ armor_id: 'hide', dexterity_modifier: 1 })).toEqual(13);
      expect(dnd.ac({ armor_id: 'hide', dexterity_modifier: 2 })).toEqual(14);
      expect(dnd.ac({ armor_id: 'hide', dexterity_modifier: 3 })).toEqual(14); // max dex +2

      expect(dnd.ac({ armor_id: 'hide', dexterity_modifier: 1, half_cover: true })).toEqual(15);
      expect(dnd.ac({ armor_id: 'hide', dexterity_modifier: 1, shield: true })).toEqual(15);
    });
  });
  describe('heavy armor', () => {
    test('plate mail', () => {
      expect(dnd.ac({ armor_id: 'plate_mail', dexterity_modifier: -1 })).toEqual(18);

      expect(dnd.ac({ armor_id: 'plate_mail', dexterity_modifier: 0 })).toEqual(18);
      expect(dnd.ac({ armor_id: 'plate_mail', dexterity_modifier: 1 })).toEqual(18);
      expect(dnd.ac({ armor_id: 'plate_mail', dexterity_modifier: 2 })).toEqual(18);
      expect(dnd.ac({ armor_id: 'plate_mail', dexterity_modifier: 3 })).toEqual(18);

      expect(dnd.ac({ armor_id: 'plate_mail', dexterity_modifier: 1, half_cover: true })).toEqual(20);
      expect(dnd.ac({ armor_id: 'plate_mail', dexterity_modifier: 1, shield: true })).toEqual(20);
    });
  });

  describe('spell', () => {
    test('mage armour spell', () => {
      expect(dnd.ac({ armor_id: 'mage_armour_spell', dexterity_modifier: -1 })).toEqual(12);

      expect(dnd.ac({ armor_id: 'mage_armour_spell', dexterity_modifier: 0 })).toEqual(13);
      expect(dnd.ac({ armor_id: 'mage_armour_spell', dexterity_modifier: 1 })).toEqual(14);
      expect(dnd.ac({ armor_id: 'mage_armour_spell', dexterity_modifier: 2 })).toEqual(15);
      expect(dnd.ac({ armor_id: 'mage_armour_spell', dexterity_modifier: 3 })).toEqual(16);

      expect(dnd.ac({ armor_id: 'mage_armour_spell', dexterity_modifier: 1, half_cover: true })).toEqual(16);
      expect(dnd.ac({ armor_id: 'mage_armour_spell', dexterity_modifier: 1, shield: true })).toEqual(16);
    })
  });
  describe('defense ability', () => {
    test('barbarian unarmoured', () => {
      const armor_id = 'barbarian_unarmoured';
      expect(dnd.ac({ armor_id, dexterity_modifier: -1, constitution_modifier: -1 })).toEqual(8);

      expect(dnd.ac({ armor_id, dexterity_modifier: 0, constitution_modifier: 0 })).toEqual(10);
      expect(dnd.ac({ armor_id, dexterity_modifier: 1, constitution_modifier: 1 })).toEqual(12);
      expect(dnd.ac({ armor_id, dexterity_modifier: 2, constitution_modifier: 2 })).toEqual(14);
      expect(dnd.ac({ armor_id, dexterity_modifier: 3, constitution_modifier: 3 })).toEqual(16);

      expect(dnd.ac({ armor_id, dexterity_modifier: 1, constitution_modifier: 1, half_cover: true })).toEqual(14);
      expect(dnd.ac({ armor_id, dexterity_modifier: 1, constitution_modifier: 1, shield: true })).toEqual(14);
    });
    test('monk unarmoured', () => {
      const armor_id = 'monk_unarmoured';
      expect(dnd.ac({ armor_id, dexterity_modifier: -1, wisdom_modifier: -1 })).toEqual(8);

      expect(dnd.ac({ armor_id, dexterity_modifier: 0, wisdom_modifier: 0 })).toEqual(10);
      expect(dnd.ac({ armor_id, dexterity_modifier: 1, wisdom_modifier: 1 })).toEqual(12);
      expect(dnd.ac({ armor_id, dexterity_modifier: 2, wisdom_modifier: 2 })).toEqual(14);
      expect(dnd.ac({ armor_id, dexterity_modifier: 3, wisdom_modifier: 3 })).toEqual(16);

      expect(dnd.ac({ armor_id, dexterity_modifier: 1, wisdom_modifier: 1, half_cover: true })).toEqual(14);
      expect(dnd.ac({ armor_id, dexterity_modifier: 1, wisdom_modifier: 1, shield: true })).toEqual(14);
    });
  });
  describe('resilience ability', () => {
    test('sorcerer draconic', () => {
      const armor_id = 'sorcerer_draconic';
      expect(dnd.ac({ armor_id, dexterity_modifier: -1 })).toEqual(12);

      expect(dnd.ac({ armor_id, dexterity_modifier: 0 })).toEqual(13);
      expect(dnd.ac({ armor_id, dexterity_modifier: 1 })).toEqual(14);
      expect(dnd.ac({ armor_id, dexterity_modifier: 2 })).toEqual(15);
      expect(dnd.ac({ armor_id, dexterity_modifier: 3 })).toEqual(16);

      expect(dnd.ac({ armor_id, dexterity_modifier: 1, half_cover: true })).toEqual(16);
      expect(dnd.ac({ armor_id, dexterity_modifier: 1, shield: true })).toEqual(16);
    });
  });
})
