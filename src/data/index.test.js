import data from './'

describe('data', () => {
  test('ability-scores-and-modifiers', async () => {
    expect(await data.getCollection('ability-scores-and-modifiers.yaml')).toMatchSnapshot();
  })
})
