import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, date, number, text } from '@storybook/addon-knobs';
import { DateInput } from '@progress/kendo-react-dateinputs';

const defaultValue = new Date();

const props = () => ({
  // appearance knobs
  spinners: boolean('spinners', false, 'Appearance'),

  // behavior knobs
  disabled: boolean('disabled', false, 'Behavior'),

  // dates knobs
  defaultValue: new Date(date('defaultValue', defaultValue, 'Dates')),
  value: new Date(date('value', defaultValue, 'Dates')),

  // miscellaneous knobs
  tabIndex: number('tabIndex', 0, {}, 'Miscellaneous'),
  id: text('id', '', 'Miscellaneous'),

  // event actions
  onChange: action('change')
});

storiesOf('DateInputs/DateInput', module).add('Overview', () =>
  <DateInput {...props()} />
);