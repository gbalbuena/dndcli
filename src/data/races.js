import yamlService from './yamlService';

async function getAll() {
  return yamlService.getData('races.yaml');
}

export default {
  getAll
}
