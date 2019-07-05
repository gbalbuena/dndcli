import data from '../data'

export async function getRandom() {
  const collection = await data.equipment.getAll();
  return (collection)[Math.floor(Math.random() * collection.length)];
}

export default {
  getRandom
}
