import { action } from '@storybook/addon-actions';
import { boolean, number, text, date } from '@storybook/addon-knobs';

const defaultValue = new Date();
const defaultMax = new Date('Dec 31 2099');
const defaultMin = new Date('Jan 1, 1900');

const props = () => ({
  allowReverse: boolean('allowReverse', false),
  className: text('className', ''),
  defaultShow: boolean('defaultShow', false),
  disabled: boolean('disabled', false),
  focusedDate: new Date(date('focusedDate', defaultValue)),
  id: text('id', ''),
  max: new Date(date('max', defaultMax)),
  min: new Date(date('min', defaultMin)),
  onBlur: action('blur'),
  onChange: action('change'),
  onFocus: action('focus'),
  show: boolean('show', false),
  swapButton: boolean('swapButton', false),
  tabIndex: number('tabIndex', 0)
});

export default props;