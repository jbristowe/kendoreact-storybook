import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

const props = () => ({
  animate: boolean('animate', true),
  ariaLabel: text('aria-label', ''),
  ariaLabelledBy: text('aria-labelledby', ''),
  ariaMultiselectable: text('aria-multiselectable', ''),
  checkField: text('checkField', ''),
  checkIndeterminateField: text('checkIndeterminateField', ''),
  checkboxes: boolean('animate', false),
  expandIcons: boolean('expandIcons', true),
  disabled: boolean('disabled', false, 'Behavior'),
  onExpandChange: action('onExpandChange'),
  onItemClick: action('onItemClick'),
  style: { width: 800 }
});

export default props;
