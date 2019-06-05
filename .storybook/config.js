import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withI18n } from "storybook-addon-i18n";
import { IntlProvider } from '@progress/kendo-react-intl';
import Container from './container';

addDecorator(story => <Container story={story} />);
addDecorator(centered);
addDecorator(withA11y);
addDecorator(withI18n);
addDecorator(withInfo);
addDecorator(withKnobs);

addParameters({
  backgrounds: [
    { name: 'White', value: '#fff', default: true },
    { name: 'Black', value: '#000' },
    { name: 'Twitter', value: '#00aced' },
    { name: 'Facebook', value: '#3b5998' },
  ],
  i18n: {
    provider: IntlProvider,
    supportedLocales: ['en-US', 'de-DE', 'es-ES', 'zh-CN']
  },
  options: {
    showAddonsPanel: true,
    name: 'KendoReact'
  }
});

configure(function () {
  const req = require.context('../src/stories', true, /story\.tsx$/);
  req.keys().forEach(filename => req(filename));
}, module);