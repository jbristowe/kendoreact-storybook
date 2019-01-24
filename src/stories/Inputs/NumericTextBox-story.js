import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import { NumericTextBox } from '@progress/kendo-react-inputs';

const stories = storiesOf('Inputs', module);
stories.addDecorator(withKnobs);
stories.addDecorator(checkA11y);

stories.add('NumericTextBox', () =>
  <NumericTextBox
    disabled={boolean('Disabled', false)}
  />
);