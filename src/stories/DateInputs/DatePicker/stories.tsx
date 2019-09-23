import React from 'react';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import props from './props';

export default {
  title: 'DateInputs/DatePicker'
};

export const Default = () =>
  <DatePicker {...props()} />
;