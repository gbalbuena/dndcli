import service from './equipmentService';

describe('equipment service', () => {
  test('get all', async () => {
    expect((await service.getAllEquipment()).map((v) => v.name))
      .toEqual([ 'Javelin' ]);
  })
});
