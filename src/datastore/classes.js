import yamlService from './yamlService';

function getAll() {
  return yamlService.getData('classes.yaml');
}

export default {
  getAll
}
