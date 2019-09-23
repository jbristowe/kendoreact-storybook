import React from 'react';
import { AutoComplete } from '@progress/kendo-react-dropdowns';
import props from './props';

export default {
  title: 'DropDowns/AutoComplete'
};

export const Empty = () =>
  <AutoComplete {...props()} />
;