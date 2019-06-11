import { action } from '@storybook/addon-actions';
import { boolean, number, select, text, date } from '@storybook/addon-knobs';

const defaultValue = new Date();
const defaultMax = new Date('Dec 31 2099');
const defaultMin = new Date('Jan 1, 1900');

const props = () => ({
  className: text('className', null),
  defaultShow: boolean('defaultShow', false),
  defaultValue: new Date(date('defaultValue', defaultValue)),
  disabled: boolean('disabled', false),
  focusedDate: new Date(date('focusedDate', defaultValue)),
  format: text('format', null),
  formatPlaceholder: select('formatPlaceholder', ['wide', 'narrow', 'short', 'formatPattern'], 'wide'),
  id: text('id', null),
  max: new Date(date('max', defaultMax)),
  min: new Date(date('min', defaultMin)),
  name: text('name', null),
  onBlur: action('blur'),
  onChange: action('change'),
  onFocus: action('focus'),
  required: boolean('required', false),
  show: boolean('show', false),
  tabIndex: number('tabIndex', 0),
  title: text('title', null),
  valid: boolean('valid', false),
  validationMessage: text('validationMessage', null),
  validityStyles: boolean('validityStyles', false),
  value: new Date(date('value', defaultValue)),
  weekNumber: boolean('weekNumber', false),
  width: text('width', null)
});

export default props;