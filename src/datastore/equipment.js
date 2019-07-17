import yamlService from './yamlService';

export function getAll() {
  return yamlService.getData('equipment.yaml');
}

export default {
  getAll
}
