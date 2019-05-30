import React from 'react';
import { storiesOf } from '@storybook/react';
import { NumericTextBox } from '@progress/kendo-react-inputs';
import props from './props';

storiesOf('Inputs/NumericTextBox', module).add('Overview', () =>
  <NumericTextBox {...props()} />
);
