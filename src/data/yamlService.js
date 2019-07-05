import fs from 'fs'
import yaml from 'js-yaml'

function getData(filename) {
  return yaml.safeLoad(fs.readFileSync(`${__dirname}/${filename}`, 'utf8'));
}

export default {
  getData
};
