import React from 'react';
import { NumericTextBox } from '@progress/kendo-react-inputs';
import props from './props';

export default {
  title: 'Inputs/NumericTextBox'
};

export const Overview = () =>
  <NumericTextBox {...props()} />
;