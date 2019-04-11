import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { MultiViewCalendar } from '@progress/kendo-react-dateinputs';

storiesOf('DateInputs/MultiViewCalendar', module).add('Overview', () =>
  <MultiViewCalendar
    disabled={boolean('Disabled', false)}
  />
);