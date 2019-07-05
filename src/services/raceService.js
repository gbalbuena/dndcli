import data from '../data'

export async function getAllByNames() {
  const collection = await data.races.getAll();
  return (collection.map((r) => r.name));
}

export default {
  getAllByNames
}
