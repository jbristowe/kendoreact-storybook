import React from 'react';
import { MultiSelect } from '@progress/kendo-react-dropdowns';
import props from './props';

export default {
  title: 'Dropdowns/MultiSelect'
};

export const Empty = () =>
  <MultiSelect {...props()} />
;