import abilityScoresAndModifiers from './abilityScoresAndModifiers';

describe('equipment', () => {
  test('get all', async () => {
    expect((await abilityScoresAndModifiers.getAll()).length).toEqual(16);
  });
});
