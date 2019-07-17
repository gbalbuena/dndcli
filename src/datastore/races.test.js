import races from './races';

describe('races', () => {
  test('get all', async () => {
    expect(
      (await races.getAll()).map((e) => e.name)
    ).toEqual([
      'Dwarf',
      'Elf',
      'Halfling',
      'Human',
      'Dragonborn',
      'Gnome',
      'Half-Elf',
      'Half-Orc',
      'Tiefling'
    ]);
  });
});
