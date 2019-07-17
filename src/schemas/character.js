import Schema from 'validate'
import d from '../datastore';

const character = new Schema({
  name: {
    type: String,
    required: true,
    length: { min: 3, max: 255 }
  },
  race: {
    type: String,
    enum: d.races.getAll().map((r) => r.name ),
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
