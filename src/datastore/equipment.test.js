import equipment from './equipment';

describe('equipment', () => {
  test('get all', async () => {
    expect(
      (await equipment.getAll()).map((e) => e.name)
    ).toEqual(['Javelin', 'Longsword']);
  });
});
