import yamlService from './yamlService';

async function getAll() {
  return yamlService.getData('equipment.yaml');
}

export default {
  getAll
}
