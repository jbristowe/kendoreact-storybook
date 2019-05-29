import { action } from '@storybook/addon-actions';
import { boolean, number, select, text } from '@storybook/addon-knobs';

const props = () => ({
  // appearance knobs
  bottomView: select('bottomView', ['month', 'year', 'decade', 'century'], 'month', 'Appearance'),
  defaultActiveView: select('defaultActiveView', ['month', 'year', 'decade', 'century'], 'month', 'Appearance'),
  navigation: boolean('navigation', true, 'Appearance'),
  weekNumber: boolean('weekNumber', false, 'Appearance'),
  topView: select('topView', ['month', 'year', 'decade', 'century'], 'month', 'Appearance'),

  // behavior knobs
  disabled: boolean('disabled', false, 'Behavior'),
  smoothScroll: boolean('smoothScroll', false, 'Behavior'),

  // miscellaneous knobs
  tabIndex: number('tabIndex', 0, {}, 'Miscellaneous'),
  className: text('className', '', 'Miscellaneous'),
  id: text('id', '', 'Miscellaneous'),

  // event actions
  onBlur: action('blur'),
  onChange: action('change'),
  onFocus: action('focus')
});

export default props;