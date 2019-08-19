import pachage from '../../package.json';
import versionService from './versionService';

test('get version', () => {
  expect(versionService.getVersion()).toInclude(pachage.name, pachage.version);
});
