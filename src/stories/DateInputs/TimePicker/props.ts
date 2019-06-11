import { action } from '@storybook/addon-actions';
import { boolean, number, text, date } from '@storybook/addon-knobs';

const defaultValue = new Date();
const defaultMax = new Date('Dec 31 2099');
const defaultMin = new Date('Jan 1, 1900');

const props = () => ({
  className: text('className', ''),
  defaultValue: new Date(date('defaultValue', defaultValue)),
  disabled: boolean('disabled', false),
  id: text('id', null),
  max: new Date(date('max', defaultMax)),
  min: new Date(date('min', defaultMin)),
  name: text('name', null),
  nowButton: boolean('nowButton', false),
  onBlur: action('blur'),
  onChange: action('change'),
  onFocus: action('focus'),
  required: boolean('required', false),
  show: boolean('show', false),
  smoothScroll: boolean('smoothScroll', false),
  tabIndex: number('tabIndex', 0, undefined),
  value: new Date(date('value', defaultValue))
});

export default props;