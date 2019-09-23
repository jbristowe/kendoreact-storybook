import React from 'react';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import props from './props';

export default {
  title: 'Dropdowns/DropDownList'
};

export const Empty = () =>
  <DropDownList {...props()} />
;