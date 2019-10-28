import character from './character';

describe('character schema', () => {
  test('should have a name', () => {
    const paladin = {
      name: 'Good Paladin'
    };
    expect(character.isValid(paladin)).toEqual([]);
  });
});
