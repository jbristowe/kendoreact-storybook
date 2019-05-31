import React from 'react';
import { storiesOf } from '@storybook/react';
import { MultiViewCalendar } from '@progress/kendo-react-dateinputs';
import props from './props';

storiesOf('DateInputs/MultiViewCalendar', module).add('Default', () =>
  <MultiViewCalendar {...props()} />
);