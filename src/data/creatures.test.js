import creatures from './creatures';

describe('creatures', () => {
  test('get all', async () => {
    expect(
      (await creatures.getAll()).map((e) => e.name)
    ).toEqual(['Chicken']);
  });

  test('find by name', async () => {
    expect(
      (await creatures.findByName('Chicken')).name
    ).toEqual('Chicken');
  });
});
