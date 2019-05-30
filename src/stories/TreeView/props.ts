import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

const props = () => ({
  // appearance knobs
  expandIcons: boolean('expandIcons', true, 'Appearance'),

  // behavior knobs
  disabled: boolean('disabled', false, 'Behavior'),

  // event actions
  onExpandChange: action('onExpandChange'),
  onItemClick: action('onItemClick'),

  // appearance
  style: { width: 800 },
});

export default props;
