import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered';
import { withKnobs } from '@storybook/addon-knobs';
import Container from './container';

addDecorator(story => <Container story={story} />);
addDecorator(centered);
addDecorator(withA11y);
addDecorator(withInfo);
addDecorator(withKnobs);

addParameters({
  backgrounds: [
    { name: 'White', value: '#fff', default: true },
    { name: 'Black', value: '#000' },
    { name: 'Twitter', value: '#00aced' },
    { name: 'Facebook', value: '#3b5998' },
  ],
  options: {
    showAddonsPanel: true,
    name: 'KendoReact'
  }
});

configure(function () {
  const req = require.context('../src/stories', true, /story\.tsx$/);
  req.keys().forEach(filename => req(filename));
}, module);