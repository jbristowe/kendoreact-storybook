import React from 'react';
import { ComboBox } from '@progress/kendo-react-dropdowns';
import props from './props';

export default {
  title: 'DropDowns/ComboBox'
};

export const Empty = () =>
  <ComboBox {...props()} />
;