import fs from 'fs'
import yaml from 'js-yaml'

async function getCollection(filename) {
  return yaml.safeLoad(fs.readFileSync(`${__dirname}/${filename}`, 'utf8'));
}

export default {
  getCollection
}
