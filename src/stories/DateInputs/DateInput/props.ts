import { action } from '@storybook/addon-actions';
import { boolean, number, select, text, date } from '@storybook/addon-knobs';

const defaultValue = new Date();
const defaultMax = new Date('Dec 31 2099');
const defaultMin = new Date('Jan 1, 1900');

const dateInputProps = () => ({
  className: text('className', undefined),
  defaultValue: new Date(date('defaultValue', defaultValue)),
  dir: select('dir', ['rtl', 'ltr', 'auto'], 'auto'),
  disabled: boolean('disabled', undefined),
  format: text('format', undefined),
  formatPlaceholder: select('formatPlaceholder', ['wide', 'narrow', 'short', 'formatPattern'], undefined),
  id: text('id', undefined),
  label: text('label', undefined),
  max: new Date(date('max', defaultMax)),
  min: new Date(date('min', defaultMin)),
  name: text('name', undefined),
  onChange: action('change'),
  required: boolean('required', undefined),
  spinners: boolean('spinners', undefined),
  tabIndex: number('tabIndex', 0),
  title: text('title', undefined),
  valid: boolean('valid', undefined),
  validationMessage: text('validationMessage', undefined),
  validityStyles: boolean('validityStyles', undefined),
  value: new Date(date('value', defaultValue)),
  width: text('width', undefined)
});

export default dateInputProps;