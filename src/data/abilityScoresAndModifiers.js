import yamlService from './yamlService';

async function getAll() {
  return yamlService.getData('abilityScoresAndModifiers.yaml');
}

export default {
  getAll
}
