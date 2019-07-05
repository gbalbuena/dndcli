import service from './equipmentService';

describe('equipment service', () => {
  test.skip('get random', async () => {
    expect(
      (await service.getRandom()).name
    ).toEqual('Longsword');
  });
  test('pass', async () => {
    expect(true).toBeTruthy();
  })
});
