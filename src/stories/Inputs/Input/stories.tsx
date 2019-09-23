import React from 'react';
import { Input } from '@progress/kendo-react-inputs';
import props from './props';

export default {
  title: 'Inputs/Input'
};

export const Overview = () =>
  <Input {...props()} />
;