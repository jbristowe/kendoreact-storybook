import React from 'react';
import { storiesOf } from '@storybook/react';
import { Calendar } from '@progress/kendo-react-dateinputs';
import props from './props';

storiesOf('DateInputs/Calendar', module).add('Default', () =>
  <Calendar {...props()} />
);