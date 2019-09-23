import React from 'react';
import { DropDownButton } from '@progress/kendo-react-buttons';
import props from './props';

export default {
  title: 'Buttons/DropDownButton'
};

export const Default = () =>
  <DropDownButton {...props()} />
;