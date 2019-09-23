import React from 'react';
import { Calendar } from '@progress/kendo-react-dateinputs';
import props from './props';

export default {
  title: 'DateInputs/Calendar'
};

export const Default = () =>
  <Calendar {...props()} />
;