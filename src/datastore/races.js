import yamlService from './yamlService';

function getAll() {
  return yamlService.getData('races.yaml');
}

export default {
  getAll
}
