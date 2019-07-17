import yamlService from './yamlService';

function getAll() {
  return yamlService.getData('classes.json');
}

export default {
  getAll
}
