require('dotenv').config();

export function format() {
  return process.env.DNDCLI_FORMAT;
}

export function source() {
  return process.env.DNDCLI_SOURCE;
}
