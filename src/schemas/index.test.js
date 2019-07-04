import character from './character';

describe('schemas', () => {
  describe('character', () => {
    test('should be valid evil wizard', () => {
      const evilWizard = {
      }
      expect(character.isValid(evilWizard)).toBeTruthy();
    })
  });
});
