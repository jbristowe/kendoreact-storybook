import { boolean, select, text } from '@storybook/addon-knobs';

const props = () => ({
  dir: select('dir', ['rtl', 'ltr', 'auto'], 'auto'),
  disabled: boolean('disabled', false),
  width: text('width', '')
});

export default props;
