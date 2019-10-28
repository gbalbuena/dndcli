import fs from 'fs'

export function getData(filename) {
  return JSON.parse(fs.readFileSync(`${process.cwd()}/data/${filename}`, 'utf8'));
}

export default {
  getData
};
