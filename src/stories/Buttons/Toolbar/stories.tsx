import React from 'react';
import { Toolbar } from '@progress/kendo-react-buttons';
import props from './props';

export default {
  title: 'Buttons/Toolbar'
};

export const Empty = () =>
  <Toolbar {...props()} />
;