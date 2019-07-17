import fs from 'fs'
import yaml from 'js-yaml'

export function getData(filename) {
  return yaml.safeLoad(fs.readFileSync(`${process.cwd()}/collections/${filename}`, 'utf8'));
}

export function saveNewFile(filename, data) {
  const yamlData = yaml.safeDump([data]);
  fs.appendFileSync(`${process.cwd()}/collections/${filename}`, yamlData);
}

export function save(path, data) {
  const yamlData = yaml.safeDump([data]);
  fs.writeFile(path, yamlData, (err) => {
    if (err) { throw err; }
  });
}

export default {
  getData,
  saveNewFile,
  save
};
