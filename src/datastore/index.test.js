import datastore from './';

describe('datastore', () => {
  test('armor', async () => {
    expect(datastore.armor.length).toEqual(17);
  });
});
