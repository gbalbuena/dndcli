import Schema from 'validate'

const character = new Schema({
  name: {
    type: String,
    required: true,
    length: { min: 3, max: 255 }
  }
});

function isValid(obj) {
  const errors = character.validate(obj);
  return errors;
}

export default {
  isValid
}
