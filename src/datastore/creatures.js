import yamlService from './yamlService';

async function getAll() {
  return yamlService.getData('creatures.yaml');
}

async function findByName(name) {
  return (await yamlService.getData('creatures.yaml'))
    .find((creature) => creature.name.toLowerCase() === name.toLowerCase());
}

async function save(creature) {
  return yamlService.saveNewFile('creatures.yaml', creature);
}

export default {
  getAll,
  findByName,
  save
}
