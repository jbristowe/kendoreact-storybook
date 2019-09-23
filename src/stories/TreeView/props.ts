import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

const props = () => ({
  animate: boolean('animate', true),
  ariaLabel: text('aria-label', null),
  ariaLabelledBy: text('aria-labelledby', null),
  ariaMultiselectable: text('aria-multiselectable', null),
  checkField: text('checkField', null),
  checkIndeterminateField: text('checkIndeterminateField', null),
  checkboxes: boolean('animate', false),
  expandIcons: boolean('expandIcons', true),
  disabled: boolean('disabled', false, 'Behavior'),
  onExpandChange: action('onExpandChange'),
  onItemClick: action('onItemClick'),
  style: { width: 800 }
});

export default props;
