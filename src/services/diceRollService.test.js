import service from './diceRollService';

const { d20, d12, d10, d8, d6, d4 } = service;

describe('dice roll', () => {
  test('d20', () => {
    expect(
      [
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
      ].map(() => d20())
    ).toIncludeAnyMembers([20,19,18,17,16,15,14,13]);
  });
  test('d12', () => {
    expect(
      [
        1,2,3,4,5,6,7,8,9,10,11,12,
        0,0,0,0,0,0,0,0,0,0,0,0
      ].map(() => d12())
    ).toIncludeAnyMembers([12,11]);
  });
  test('d10', () => {
    expect(
      [
        1,2,3,4,5,6,7,8,9,10,
        0,0,0,0,0,0,0,0,0,0
      ].map(() => d10())
    ).toIncludeAnyMembers([10,9]);
  });
  test('d8', () => {
    expect(
      [
        1,2,3,4,5,6,7,8,
        0,0,0,0,0,0,0,0
      ].map(() => d8())
    ).toIncludeAnyMembers([8,7]);
  });
  test('d6', () => {
    expect(
      [
        1,2,3,4,5,6,
        0,0,0,0,0,0
      ].map(() => d6())
    ).toIncludeAnyMembers([5,6]);
  });
  test('d4', () => {
    expect(
      [
        1,2,3,4,
        0,0,0,0
      ].map(() => d4())
    ).toIncludeAnyMembers([1,2,3,4]);
  });
})
