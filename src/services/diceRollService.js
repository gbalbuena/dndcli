
const random = (max) => Math.floor(Math.random() * Math.floor(max) + 1);

export default {
  d20: () => random(20),
  d12: () => random(12),
  d10: () => random(10),
  d8: () => random(8),
  d6: () => random(6),
  d4: () => random(4)
}
