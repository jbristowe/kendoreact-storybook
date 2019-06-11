import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

const props = () => ({
  buttonClass: text('buttonClass', null),
  className: text('className', null),
  dir: select('dir', ['rtl', 'ltr', 'auto'], 'auto'),
  disabled: boolean('disabled', false),
  look: select('look', ['default', 'bare', 'flat', 'outline'], 'default'),
  icon: text('icon', null),
  iconClass: text('iconClass', null),
  imageAlt: text('imageAlt', null),
  imageUrl: text('imageUrl', null),
  onBlur: action('blurred'),
  onClose: action('closed'),
  onFocus: action('focused'),
  onItemClick: action('itemClicked'),
  onOpen: action('opened'),
  primary: boolean('primary', false),
  selected: boolean('selected', false),
  text: text('text', null),
  textField: text('textField', null)
});

export default props;