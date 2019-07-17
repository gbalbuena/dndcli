import core from '../datastore/core.json';
import open5e from '../datastore/open5e';
import yamlService from '../datastore/yamlService';
import jsonStore from '../datastore/jsonStore';

async function initializeData() {
  [
    'spells',
    'monsters',
    'backgrounds',
    'planes',
    'sections',
    'feats',
    'conditions',
    'races',
    'classes',
    'magicitems'
  ].forEach(async (resource) => {
    process.stdout.write(`${resource}: `);
    let data = await open5e[resource].getAll();
    if (core.datastore.format === 'json') {
      jsonStore.save(`${process.cwd()}/collections/${resource}.json`, data);
    } else if (core.datastore.format === 'yaml') {
      yamlService.save(`${process.cwd()}/collections/${resource}.yaml`, data);
    }
  });
  return;
}

export default {
  initializeData
}
