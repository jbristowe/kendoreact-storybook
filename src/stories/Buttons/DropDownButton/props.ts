import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

const props = () => ({
  buttonClass: text('buttonClass', undefined),
  className: text('className', undefined),
  dir: select('dir', ['rtl', 'ltr', 'auto'], 'auto'),
  disabled: boolean('disabled', undefined),
  look: select('look', ['default', 'bare', 'flat', 'outline'], 'default'),
  icon: text('icon', undefined),
  iconClass: text('iconClass', undefined),
  imageAlt: text('imageAlt', undefined),
  imageUrl: text('imageUrl', undefined),
  onBlur: action('blurred'),
  onClose: action('closed'),
  onFocus: action('focused'),
  onItemClick: action('itemClicked'),
  onOpen: action('opened'),
  primary: boolean('primary', undefined),
  selected: boolean('selected', undefined),
  text: text('text', undefined),
  textField: text('textField', undefined)
});

export default props;