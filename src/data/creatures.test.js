import creatures from './creatures';

describe('creatures', () => {
  test('get all', async () => {
    expect(
      (await creatures.getAll()).map((e) => e.name)
    ).toEqual(['Chicken']);
  });
});
