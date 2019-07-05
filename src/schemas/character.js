import Schema from 'validate'
import raceService from '../services/raceService';

const character = new Schema({
  name: {
    type: String,
    required: true,
    length: { min: 3, max: 255 }
  },
  race: {
    type: String,
    enum: ['Human'],
    required: true
  },
});

function isValid(obj) {
  const errors = character.validate(obj);
  return errors;
}

export default {
  isValid
}
