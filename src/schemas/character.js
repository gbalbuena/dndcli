import Schema from 'validate'

const character = new Schema({
  id: {
    type: String,
    required: true,
    length: { min: 3, max: 32 }
  },
  name: {
    type: String,
    required: true,
    length: { min: 3, max: 255 }
  },
  classType: {
    type: String,
    enum: ['human', 'elf', 'tiefling', 'dragonborn'],
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
