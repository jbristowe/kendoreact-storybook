import { action } from '@storybook/addon-actions';
import { boolean, number, select, text, date } from '@storybook/addon-knobs';

const defaultValue = new Date();
const defaultMax = new Date('Dec 31 2099');
const defaultMin = new Date('Jan 1, 1900');

const dateInputProps = () => ({
  className: text('className', null),
  defaultValue: new Date(date('defaultValue', defaultValue)),
  dir: select('dir', ['rtl', 'ltr', 'auto'], 'auto'),
  disabled: boolean('disabled', false),
  format: text('format', null),
  formatPlaceholder: select('formatPlaceholder', ['wide', 'narrow', 'short', 'formatPattern'], 'wide'),
  id: text('id', null),
  label: text('label', null),
  max: new Date(date('max', defaultMax)),
  min: new Date(date('min', defaultMin)),
  name: text('name', null),
  onChange: action('change'),
  required: boolean('required', false),
  spinners: boolean('spinners', false),
  tabIndex: number('tabIndex', 0),
  title: text('title', null),
  valid: boolean('valid', false),
  validationMessage: text('validationMessage', null),
  validityStyles: boolean('validityStyles', false),
  value: new Date(date('value', defaultValue)),
  width: text('width', null)
});

export default dateInputProps;