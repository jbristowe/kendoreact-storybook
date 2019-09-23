import React from 'react';
import { TimePicker } from '@progress/kendo-react-dateinputs';
import props from './props';

export default {
  title: 'DateInputs/TimePicker'
};

export const Default = () =>
  <TimePicker {...props()} />
;