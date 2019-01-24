import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, date, number, select, text, withKnobs } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import { Calendar, CalendarProps } from '@progress/kendo-react-dateinputs';

const props = () => ({
  bottomView: select('bottomView', [ 'month', 'year', 'decade', 'century' ], 'month'),
  className: boolean('className', ''),
  defaultActiveView: select('defaultActiveView', [ 'month', 'year', 'decade', 'century' ], 'month'),
  defaultValue: new Date(date('defaultValue', defaultValue)),
  disabled: boolean('disabled', false),
  focusedDate: new Date(date('focusedDate', defaultValue)),
  id: text('id', ''),
  max: new Date(date('max', defaultMax)),
  min: new Date(date('min', defaultMin)),
  navigation: boolean('navigation', true),
  onBlur: action('blur'),
  onChange: action('change'),
  onFocus: action('focus'),
  smoothScroll: boolean('smoothScroll', false),
  tabIndex: number('tabIndex', 0, {}),
  topView: select('topView', [ 'month', 'year', 'decade', 'century' ], 'month'),
  value: new Date(date('value', defaultValue)),
  weekNumber: boolean('weekNumber', false )
});

const defaultValue = new Date('Jan 20 2017');
const defaultMax = new Date('Dec 31 2099');
const defaultMin = new Date('Jan 1 1900');

const stories = storiesOf('DateInputs', module);
stories.addDecorator(withKnobs);
stories.addDecorator(checkA11y);

stories.add('Calendar', () => {
  return (<Calendar {...props()} />);
});