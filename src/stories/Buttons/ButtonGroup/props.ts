import { boolean, select, text } from '@storybook/addon-knobs';

const props = () => ({
  className: text('className', null),
  dir: select('dir', ['rtl', 'ltr', 'auto'], 'auto'),
  disabled: boolean('disabled', false),
  width: text('width', null)
});

export default props;