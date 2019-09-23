import React from 'react';
import { MultiViewCalendar } from '@progress/kendo-react-dateinputs';
import props from './props';

export default {
  title: 'DateInputs/MultiViewCalendar'
};

export const Default = () =>
  <MultiViewCalendar {...props()} />
;