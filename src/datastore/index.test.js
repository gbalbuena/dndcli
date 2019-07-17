import data from './';
import creatures from './creatures';

describe('data', () => {
  test('creatures', async () => {
    expect(data.creatures).toBe(creatures);
  });
});
