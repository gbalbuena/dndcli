import * as yaml from './yamlService';
import creatures from './creatures';

jest.mock('./yamlService');

describe('creatures', () => {
  beforeAll(() => {
    yaml.saveNewFile.mockResolvedValue({});
  });

  test('get all', async () => {
    yaml.getData.mockResolvedValue([{ name: 'Chicken' }, { name: 'EvilChicken' }]);
    expect((await creatures.getAll()).map((e) => e.name)
    ).toEqual(['Chicken', 'EvilChicken']);
  });

  test('find by name', async () => {
    expect((await creatures.findByName('Chicken')).name
    ).toEqual('Chicken');
  });

  test('save', async () => {
    expect(await creatures.save({})).toEqual({});
  })
});
