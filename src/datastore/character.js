import yamlService from './yamlService';

async function getAll() {
  return yamlService.getData('character.yaml');
}

async function findByName(name) {
  const lowercaseName = name.toLowerCase();
  return (await yamlService.getData(`/characters/${lowercaseName}.yaml`));
}

async function save(filename, character) {
  return yamlService.saveNewFile(`/characters/${filename}.lvl${character.level}.yaml`, character);
}

export default {
  getAll,
  findByName,
  save
}
