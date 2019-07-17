import axios from 'axios';

async function get(resource) {
  const response = await axios.get(`https://raw.githubusercontent.com/gbalbuena/open5e-api/master/data/WOTC_5e_SRD_v5.1/${resource}.json`);
  return response.data;
}

export default {
  spells: { getAll: () => get('spells') },
  monsters: { getAll: () => get('monsters') },
  backgrounds: { getAll: () => get('backgrounds') },
  planes: { getAll: () => get('planes') },
  sections: { getAll: () => get('sections') },
  feats: { getAll: () => get('feats') },
  conditions: { getAll: () => get('conditions') },
  races: { getAll: () => get('races') },
  classes:    { getAll: () => get('classes') },
  magicitems: { getAll: () => get('magicitems') },
}
