import { action } from '@storybook/addon-actions';
import { boolean, date, number, select, text } from '@storybook/addon-knobs';

const defaultValue = new Date();
const defaultMax = new Date('Dec 31 2099');
const defaultMin = new Date('Jan 1, 1900');

const props = () => ({
  bottomView: select('bottomView', [ 'month', 'year', 'decade', 'century' ], 'month'),
  className: text('className', ''),
  defaultActiveView: select('defaultActiveView', [ 'month', 'year', 'decade', 'century' ], 'month'),
  defaultValue: new Date(date('defaultValue', defaultValue)),
  disabled: boolean('disabled', false),
  focusedDate: new Date(date('focusedDate', defaultValue)),
  id: text('id', null),
  max: new Date(date('max', defaultMax)),
  min: new Date(date('min', defaultMin)),
  navigation: boolean('navigation', true),
  onBlur: action('blur'),
  onChange: action('change'),
  onFocus: action('focus'),
  smoothScroll: boolean('smoothScroll', false),
  tabIndex: number('tabIndex', 0, undefined),
  topView: select('topView', [ 'month', 'year', 'decade', 'century' ], 'month'),
  value: new Date(date('value', defaultValue)),
  weekNumber: boolean('weekNumber', false)
});

export default props;