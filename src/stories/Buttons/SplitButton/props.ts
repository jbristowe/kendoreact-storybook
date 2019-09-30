import { action } from '@storybook/addon-actions';
import { boolean, select, text, number } from '@storybook/addon-knobs';
import { icons } from '../../../utils/icons';

const props = () => ({
  accessKey: text('accessKey', '', 'SplitButton'),
  buttonClass: text('buttonClass', '', 'SplitButton'),
  className: text('className', '', 'SplitButton'),
  dir: text('dir', '', 'SplitButton'),
  disabled: boolean('disabled', false, 'SplitButton'),
  icon: select('icon', icons, '', 'SplitButton'),
  iconClass: text('iconClass', '', 'SplitButton'),
  imageUrl: text('imageUrl', '', 'SplitButton'),
  look: select('look', ['default', 'bare', 'flat', 'outline'], 'default', 'SplitButton'),
  onBlur: action('blur'),
  onButtonClick: action('buttonClick'),
  onClose: action('close'),
  onFocus: action('focus'),
  onItemClick: action('itemClick'),
  onOpen: action('open'),
  tabIndex: number('tabIndex', 0, {}, 'SplitButton'),
  text: text('text', 'This is the text...', 'SplitButton'),
  textField: text('textField', '', 'SplitButton')
});

export const splitButtonItemOneProps = () => ({
  disabled: boolean('disabled (1)', false, 'SplitButtonItem One'),
  icon: select('icon (1)', icons, '', 'SplitButtonItem One'),
  iconClass: text('iconClass (1)', '', 'SplitButtonItem One'),
  imageUrl: text('imageUrl (1)', '', 'SplitButtonItem One'),
  text: text('text (1)', 'A', 'SplitButtonItem One')
});

export const splitButtonItemTwoProps = () => ({
  disabled: boolean('disabled (2)', false, 'SplitButtonItem Two'),
  icon: select('icon (2)', icons, '', 'SplitButtonItem Two'),
  iconClass: text('iconClass (2)', '', 'SplitButtonItem Two'),
  imageUrl: text('imageUrl (2)', '', 'SplitButtonItem Two'),
  text: text('text (2)', 'B', 'SplitButtonItem Two')
});

export const splitButtonItemThreeProps = () => ({
  disabled: boolean('disabled (3)', false, 'SplitButtonItem Three'),
  icon: select('icon (3)', icons, '', 'SplitButtonItem Three'),
  iconClass: text('iconClass (3)', '', 'SplitButtonItem Three'),
  imageUrl: text('imageUrl (3)', '', 'SplitButtonItem Three'),
  text: text('text (3)', 'C', 'SplitButtonItem Three')
});

export default props;