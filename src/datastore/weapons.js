import yamlService from './yamlService';

export function getAll() {
  return yamlService.getData('weapons.yaml');
}

export default {
  getAll
}
