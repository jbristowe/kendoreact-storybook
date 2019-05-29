import { text } from '@storybook/addon-knobs';
import content from './content';

export const props = () => ({
  // appearance knobs
  defaultContent: text('defaultContent', content, 'Appearance'),

  // behavior knobs

  // event actions

  // appearance
  style: {width:800}
});

export default props;