import { action } from '@storybook/addon-actions';
import { boolean, select, text, number } from '@storybook/addon-knobs';
import { icons } from '../../../utils/icons';

const props = () => ({
  accessKey: text('accessKey', null, 'SplitButton'),
  buttonClass: text('buttonClass', null, 'SplitButton'),
  className: text('className', null, 'SplitButton'),
  dir: text('dir', null, 'SplitButton'),
  disabled: boolean('disabled', false, 'SplitButton'),
  icon: select('icon', icons, null, 'SplitButton'),
  iconClass: text('iconClass', null, 'SplitButton'),
  imageUrl: text('imageUrl', null, 'SplitButton'),
  look: select('look', ['default', 'bare', 'flat', 'outline'], 'default', 'SplitButton'),
  onBlur: action('blur'),
  onButtonClick: action('buttonClick'),
  onClose: action('close'),
  onFocus: action('focus'),
  onItemClick: action('itemClick'),
  onOpen: action('open'),
  tabIndex: number('tabIndex', 0, {}, 'SplitButton'),
  text: text('text', 'This is the text...', 'SplitButton'),
  textField: text('textField', null, 'SplitButton')
});

export const splitButtonItemOneProps = () => ({
  disabled: boolean('disabled (1)', false, 'SplitButtonItem One'),
  icon: select('icon (1)', icons, null, 'SplitButtonItem One'),
  iconClass: text('iconClass (1)', null, 'SplitButtonItem One'),
  imageUrl: text('imageUrl (1)', null, 'SplitButtonItem One'),
  text: text('text (1)', 'A', 'SplitButtonItem One')
});

export const splitButtonItemTwoProps = () => ({
  disabled: boolean('disabled (2)', false, 'SplitButtonItem Two'),
  icon: select('icon (2)', icons, null, 'SplitButtonItem Two'),
  iconClass: text('iconClass (2)', null, 'SplitButtonItem Two'),
  imageUrl: text('imageUrl (2)', null, 'SplitButtonItem Two'),
  text: text('text (2)', 'B', 'SplitButtonItem Two')
});

export const splitButtonItemThreeProps = () => ({
  disabled: boolean('disabled (3)', false, 'SplitButtonItem Three'),
  icon: select('icon (3)', icons, null, 'SplitButtonItem Three'),
  iconClass: text('iconClass (3)', null, 'SplitButtonItem Three'),
  imageUrl: text('imageUrl (3)', null, 'SplitButtonItem Three'),
  text: text('text (3)', 'C', 'SplitButtonItem Three')
});

export default props;