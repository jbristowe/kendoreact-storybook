import { boolean, select, text } from '@storybook/addon-knobs';

const props = () => ({
  className: text('className', undefined),
  dir: select('dir', ['rtl', 'ltr', 'auto'], 'auto'),
  disabled: boolean('disabled', undefined),
  width: text('width', undefined)
});

export default props;