import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

const tree = [
  {
    text: 'Furniture',
    expanded: true,
    items: [
      { text: 'Tables & Chairs' },
      { text: 'Sofas' },
      { text: 'Occasional Furniture' }
    ]
  }, {
    text: 'Decor',
    items: [
      { text: 'Bed Linen' },
      { text: 'Curtains & Blinds' },
      { text: 'Carpets' }
    ]
  }
];

const props = () => ({
  // appearance knobs
  expandIcons: boolean('expandIcons', true, 'Appearance'),

  // behavior knobs
  disabled: boolean('disabled', false, 'Behavior'),

  // event actions
  onExpandChange: action('onExpandChange'),
  onItemClick: action('onItemClick'),

  // appearance
  data: tree,
  style: { width: 800 },
});

export default props;
