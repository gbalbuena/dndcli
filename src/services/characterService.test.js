import service, { getModifier } from './characterService';

describe('character service', () => {
  test('should say hi', () => {
    expect(service.sayHi()).toEqual('Hi Evil Wizard');
  });

  test('ability scores and modifiers', async () => {
    expect(await getModifier(20)).toEqual(5);
  });

  // test('do attack roll', () => {
  //   const d20Roll = 10;
  //   const paladin = {
  //     strenghtModifier: 5
  //   };
  //   const weapon = {
  //     atkBonus: 1
  //   };
  //   expect(service.doAttackRoll(d20Roll, paladin.strenghtModifier, weapon.atkBonus))
  //     .toEqual(16);
  // })
});
