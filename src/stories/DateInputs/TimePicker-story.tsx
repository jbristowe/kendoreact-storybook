import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { TimePicker } from '@progress/kendo-react-dateinputs';

storiesOf('DateInputs/TimePicker', module).add('Overview', () =>
  <TimePicker
    disabled={boolean('Disabled', false)}
  />
);