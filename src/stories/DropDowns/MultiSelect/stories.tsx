import React from 'react';
import { MultiSelect } from '@progress/kendo-react-dropdowns';
import props from './props';

export default {
  title: 'DropDowns/MultiSelect'
};

export const Empty = () =>
  <MultiSelect {...props()} />
;