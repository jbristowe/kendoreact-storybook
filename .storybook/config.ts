import { addDecorator, addParameters, configure } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { withI18n } from "storybook-addon-i18n";
import { IntlProvider } from '@progress/kendo-react-intl';
import centered from '@storybook/addon-centered/react';
import { Container } from './container';
import { contexts } from './contexts';

addDecorator(Container);
addDecorator(withContexts(contexts));
addDecorator(centered);
addDecorator(withA11y);
addDecorator(withI18n);
addDecorator(withKnobs);

addParameters({
  backgrounds: [
    { name: 'White', value: '#fff' },
    { name: 'Black', value: '#000' },
    { name: 'Twitter', value: '#00aced' },
    { name: 'Facebook', value: '#3b5998' },
  ],
  options: {
    showAddonsPanel: true,
    name: 'KendoReact'
  }
});

configure(require.context('../src/stories', true, /stories\.tsx$/), module);