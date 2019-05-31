import React from 'react';
import { storiesOf } from '@storybook/react';
import { DateInput } from '@progress/kendo-react-dateinputs';
import props from './props';

storiesOf('DateInputs/DateInput', module).add('Default', () =>
  <DateInput {...props()} />
);