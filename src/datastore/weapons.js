import yamlService from './yamlService';

export function getAll() {
  return yamlService.getData('weapons.yaml').sort((a, b) => a.name > b.name ? 1 : -1);
}

export default {
  getAll
}
