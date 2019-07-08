import service from './equipmentService';

describe('equipment service', () => {
  test('get random', async () => {
    expect(
      [(await service.getRandom()).name]
    ).toIncludeAnyMembers(['Javelin', 'Longsword']);
  });
  test('pass', async () => {
    expect(true).toBeTruthy();
  })
});
