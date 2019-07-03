import React from 'react';
import { storiesOf } from '@storybook/react';
import { NumericTextBox } from '@progress/kendo-react-inputs';
import NumericTextBoxProps from './props';

storiesOf('Inputs/NumericTextBox', module).add('Overview', () =>
  <NumericTextBox {...NumericTextBoxProps()} />
);
