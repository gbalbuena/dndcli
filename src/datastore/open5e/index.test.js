import open5e from './'

describe('open5e', () => {
  test.skip('classes', async () => {
    const data = await open5e.classes.getAll();
    expect(data).toEqual([]);
  });
});
