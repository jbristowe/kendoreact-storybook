import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { DateRangePicker } from '@progress/kendo-react-dateinputs';

storiesOf('DateInputs/DateRangePicker', module).add('Overview', () =>
  <DateRangePicker
    disabled={boolean('Disabled', false)}
  />
);