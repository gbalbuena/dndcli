import yamlService from './yamlService';

async function getAll() {
  return yamlService.getData('creatures.yaml');
}

async function findByName(name) {
  return (await yamlService.getData('creatures.yaml')).find((creature) => creature.name === name);
}

export default {
  getAll,
  findByName
}
