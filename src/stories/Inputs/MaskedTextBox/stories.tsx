import React from 'react';
import { MaskedTextBox } from '@progress/kendo-react-inputs';
import props from './props';

export default {
  title: 'Inputs/MaskedTextBox'
};

export const Overview = () =>
  <MaskedTextBox {...props()} />
;