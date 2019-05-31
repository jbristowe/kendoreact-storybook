import React from 'react';
import { storiesOf } from '@storybook/react';
import { TimePicker } from '@progress/kendo-react-dateinputs';
import props from './props';

storiesOf('DateInputs/TimePicker', module).add('Default', () =>
  <TimePicker {...props()} />
);