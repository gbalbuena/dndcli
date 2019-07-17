import d from '../datastore'

export async function getRandom() {
  const collection = await d.equipment.getAll();
  return (collection)[Math.floor(Math.random() * collection.length)];
}

export default {
  getRandom
}
