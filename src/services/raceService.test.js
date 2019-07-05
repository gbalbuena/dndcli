import service from './raceService';

describe('race service', () => {
  test('get a list of names', async () => {
    expect((await service.getAllByNames()).length).toEqual(9);
  })
});
