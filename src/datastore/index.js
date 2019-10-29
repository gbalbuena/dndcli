import jsonstore from './jsonstore';

export default {
  armor: jsonstore.getData('armor.json'),
  weapons: jsonstore.getData('weapons.json')
}
