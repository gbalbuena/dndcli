import data from './';
import modifiers from './modifiers';
import creatures from './creatures';
import equipment from './equipment';

describe('data', () => {
  test('modifiers', async () => {
    expect(data.modifiers).toBe(modifiers);
  });

  test('creatures', async () => {
    expect(data.creatures).toBe(creatures);
  });

  test('equipment', async () => {
    expect(data.equipment).toBe(equipment);
  });
});
