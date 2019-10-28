import pachage from '../../package.json';
import version from './version';

test('version', () => {
  expect(version.getVersion())
    .toInclude(pachage.name, pachage.version);
});
