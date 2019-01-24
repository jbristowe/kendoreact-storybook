import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import infoAddon, { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import centered from '@storybook/addon-centered';
import Container from './container';

// addon-info defaults
setDefaults({
  maxPropStringLength: 200, // Displays the first 200 characters in the default prop string
});
setAddon(infoAddon);

setOptions({
  name: 'KendoReact'
});

addDecorator(centered);
addDecorator(story => <Container story={story} />);

configure(function () {
  const req = require.context('../src/stories', true, /story\.js$/);
  req.keys().forEach(filename => req(filename));
}, module);