import React from 'react';
import { DateInput } from '@progress/kendo-react-dateinputs';
import props from './props';

export default {
  title: 'DateInputs/DateInput'
};

export const Default = () =>
  <DateInput {...props()} />
;