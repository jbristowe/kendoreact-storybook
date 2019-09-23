import React from 'react';
import { ComboBox } from '@progress/kendo-react-dropdowns';
import props from './props';

export default {
  title: 'Dropdowns/ComboBox'
};

export const Empty = () =>
  <ComboBox {...props()} />
;