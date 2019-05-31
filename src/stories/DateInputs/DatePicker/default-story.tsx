import React from 'react';
import { storiesOf } from '@storybook/react';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import props from './props';

storiesOf('DateInputs/DatePicker', module).add('Default', () =>
  <DatePicker {...props()} />
);