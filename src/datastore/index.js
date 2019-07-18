import yaml from './yamlService';

const classes = () => [... yaml
  .getData('classes.yaml')
  .sort((a, b) => a.name > b.name ? 1 : -1) ]

const core = () => yaml.getData('core.yaml');

const creatures = {
  all: () => [... yaml.getData('creatures.yaml') ]
}

const races = {
  all: () => [... yaml.getData('races.yaml') ]
}

const weapons = {
  all: () => [... yaml.getData('weapons.yaml')
    .sort((a, b) => a.name > b.name ? 1 : -1)
  ]
}

export default {
  classes,
  core,
  creatures,
  races,
  weapons
}
