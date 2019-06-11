import { action } from '@storybook/addon-actions';
import { select, text, number } from '@storybook/addon-knobs';

const props = () => ({
  className: text('className', null),
  dir: select('dir', ['rtl', 'ltr', 'auto'], 'auto'),
  onResize: action('resized'),
  tabIndex: number('tabIndex', 0)
});

export default props;