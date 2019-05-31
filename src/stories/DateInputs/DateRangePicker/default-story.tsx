import React from 'react';
import { storiesOf } from '@storybook/react';
import { DateRangePicker } from '@progress/kendo-react-dateinputs';
import props from './props';

storiesOf('DateInputs/DateRangePicker', module).add('Default', () =>
  <DateRangePicker {...props()} />
);