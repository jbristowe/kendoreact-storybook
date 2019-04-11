import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { NumericTextBox } from '@progress/kendo-react-inputs';

storiesOf('Inputs/NumericTextBox', module).add('Overview', () =>
  <NumericTextBox
    disabled={boolean('Disabled', false)}
  />
);