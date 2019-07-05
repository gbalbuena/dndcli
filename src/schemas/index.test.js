import character from './character';

describe('schemas', () => {
  describe('character', () => {
    test('good paladin should be valid', () => {
      const goodPaladin = {
        name: 'Good Paladin',
        race: 'Human'
      };
      expect(character.isValid(goodPaladin)).toEqual([]);
    })
    test('evil wizard should not be valid', () => {
      const evilWizard = {
      };
      expect(character.isValid(evilWizard)).toEqual([
        new Error('name is required.'),
        new Error('race is required.'),
      ]);
    })
  });
});
