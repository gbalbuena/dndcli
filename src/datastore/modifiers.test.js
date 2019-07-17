import modifiers from './modifiers';

describe('modifiers', () => {
  test('get all', async () => {
    expect((await modifiers.getAll()).length).toEqual(16);
  });
});
