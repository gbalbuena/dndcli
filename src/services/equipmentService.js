import fs from 'fs'
import yaml from 'js-yaml'

async function getAllEquipment() {
  const file = await yaml.safeLoad(fs.readFileSync(`${__dirname}/equipment.yaml`, 'utf8'));
  return file;
}

export default {
  getAllEquipment
}
