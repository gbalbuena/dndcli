import fs from 'fs'

export function getData(filename) {
  return fs.readFileSync(`${process.cwd()}/collections/${filename}`, 'utf8');
}

export function append(filename, data) {
  fs.appendFileSync(`${process.cwd()}/collections/${filename}`, data);
}

export function save(path, data) {
  fs.writeFile(path, JSON.stringify(data), (err) => {
    if (err) { throw err; }
  });
}

export default {
  getData,
  append,
  save
};
