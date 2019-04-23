import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import { withKnobs } from '@storybook/addon-knobs';
import Container from './container';

addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator(centered);
addDecorator(story => <Container story={story} />);

addParameters({
  options: {
    name: 'KendoReact'
  }
});

configure(function () {
  const req = require.context('../src/stories', true, /story\.js$/);
  req.keys().forEach(filename => req(filename));
}, module);