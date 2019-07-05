import data from './';
import abilityScoresAndModifiers from './abilityScoresAndModifiers';
import creatures from './creatures';
import equipment from './equipment';

describe('data', () => {
  test('abilityScoresAndModifiers', async () => {
    expect(data.abilityScoresAndModifiers).toBe(abilityScoresAndModifiers);
  });

  test('creatures', async () => {
    expect(data.creatures).toBe(creatures);
  });

  test('equipment', async () => {
    expect(data.equipment).toBe(equipment);
  });
});
