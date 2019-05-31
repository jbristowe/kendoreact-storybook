import { action } from '@storybook/addon-actions';
import { boolean, number, select, text, date } from '@storybook/addon-knobs';

const defaultValue = new Date();
const defaultMax = new Date('Dec 31 2099');
const defaultMin = new Date('Jan 1, 1900');

const props = () => ({
  className: text('className', undefined),
  defaultShow: boolean('defaultShow', undefined),
  defaultValue: new Date(date('defaultValue', defaultValue)),
  disabled: boolean('disabled', undefined),
  focusedDate: new Date(date('focusedDate', defaultValue)),
  format: text('format', undefined),
  formatPlaceholder: select('formatPlaceholder', ['wide', 'narrow', 'short', 'formatPattern'], undefined),
  id: text('id', undefined),
  max: new Date(date('max', defaultMax)),
  min: new Date(date('min', defaultMin)),
  name: text('name', undefined),
  onBlur: action('blur'),
  onChange: action('change'),
  onFocus: action('focus'),
  required: boolean('required', undefined),
  show: boolean('show', undefined),
  tabIndex: number('tabIndex', 0),
  title: text('title', undefined),
  valid: boolean('valid', undefined),
  validationMessage: text('validationMessage', undefined),
  validityStyles: boolean('validityStyles', undefined),
  value: new Date(date('value', defaultValue)),
  weekNumber: boolean('weekNumber', false),
  width: text('width', undefined)
});

export default props;