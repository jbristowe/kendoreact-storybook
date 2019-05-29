import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { DatePicker } from '@progress/kendo-react-dateinputs';

storiesOf('DateInputs/DatePicker', module).add('Overview', () =>
  <DatePicker
    disabled={boolean('Disabled', false)}
  />
);