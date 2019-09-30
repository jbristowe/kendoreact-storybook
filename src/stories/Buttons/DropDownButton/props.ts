import { action } from '@storybook/addon-actions';
import { array, boolean, select, text } from '@storybook/addon-knobs';
import { icons } from '../../../utils/icons';

const props = () => ({
  buttonClass: text('buttonClass', ''),
  className: text('className', ''),
  dir: select('dir', ['rtl', 'ltr', 'auto'], 'auto'),
  disabled: boolean('disabled', false),
  look: select('look', ['default', 'bare', 'flat', 'outline'], 'default'),
  icon: select('icon', icons, ''),
  iconClass: text('iconClass', ''),
  imageAlt: text('imageAlt', ''),
  imageUrl: text('imageUrl', ''),
  items: array('items', ['A', 'B', 'C', 'D', 'E']),
  onBlur: action('blurred'),
  onClose: action('closed'),
  onFocus: action('focused'),
  onItemClick: action('itemClicked'),
  onOpen: action('opened'),
  primary: boolean('primary', false),
  selected: boolean('selected', false),
  text: text('text', 'Text...'),
  textField: text('textField', '')
});

export default props;