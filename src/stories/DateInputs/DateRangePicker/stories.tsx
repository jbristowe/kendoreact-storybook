import React from 'react';
import { DateRangePicker } from '@progress/kendo-react-dateinputs';
import props from './props';

export default {
  title: 'DateInputs/DateRangePicker'
};

export const Default = () =>
  <DateRangePicker {...props()} />
;