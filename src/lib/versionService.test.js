import pachage from '../../package.json';
import versionService from './versionService';

test('get version', () => {
  expect(versionService.getVersion()).toEqual(`${pachage.name}: v${pachage.version}`);
});
