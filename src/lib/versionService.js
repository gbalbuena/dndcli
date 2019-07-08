import pachage from '../../package.json';

export default {
  getVersion: () => {
    return `${pachage.name}: v${pachage.version}`;
  }
}
