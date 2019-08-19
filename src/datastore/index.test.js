import d from './';

describe('data', () => {
  test('creatures', async () => {
    expect(d.creatures.all().length).toEqual(1);
  });
});
