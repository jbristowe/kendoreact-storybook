import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, date, number, select, text } from '@storybook/addon-knobs';
import { Calendar } from '@progress/kendo-react-dateinputs';

const defaultValue = new Date();
const defaultMax = new Date('Dec 31 2099');
const defaultMin = new Date('Jan 1, 1900');

const props = () => ({
  // appearance knobs
  bottomView: select('bottomView', [ 'month', 'year', 'decade', 'century' ], 'month', 'Appearance'),
  defaultActiveView: select('defaultActiveView', [ 'month', 'year', 'decade', 'century' ], 'month', 'Appearance'),
  navigation: boolean('navigation', true, 'Appearance'),
  weekNumber: boolean('weekNumber', false, 'Appearance'),
  topView: select('topView', [ 'month', 'year', 'decade', 'century' ], 'month', 'Appearance'),

  // behavior knobs
  disabled: boolean('disabled', false, 'Behavior'),
  smoothScroll: boolean('smoothScroll', false, 'Behavior'),

  // dates knobs
  defaultValue: new Date(date('defaultValue', defaultValue, 'Dates')),
  focusedDate: new Date(date('focusedDate', defaultValue, 'Dates')),
  max: new Date(date('max', defaultMax, 'Dates')),
  min: new Date(date('min', defaultMin, 'Dates')),
  value: new Date(date('value', defaultValue, 'Dates')),

  // miscellaneous knobs
  tabIndex: number('tabIndex', 0, {}, 'Miscellaneous'),
  className: text('className', '', 'Miscellaneous'),
  id: text('id', '', 'Miscellaneous'),

  // event actions
  onBlur: action('blur'),
  onChange: action('change'),
  onFocus: action('focus')
});

storiesOf('DateInputs/Calendar', module).add('Overview', () =>
  <Calendar{...props()} />
);