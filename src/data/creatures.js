import yamlService from './yamlService';

async function getAll() {
  return yamlService.getData('creatures.yaml');
}

export default {
  getAll
}
