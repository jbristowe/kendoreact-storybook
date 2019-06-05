import { action } from '@storybook/addon-actions';
import { select, text, number } from '@storybook/addon-knobs';

const props = () => ({
  className: text('className', undefined),
  dir: select('dir', ['rtl', 'ltr', 'auto'], 'auto'),
  onResize: action('resized'),
  tabIndex: number('tabIndex', undefined)
});

export default props;