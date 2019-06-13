import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { icons } from '../../../utils/icons';

const props = () => ({
  className: text('className', null, 'ButtonGroup'),
  dir: select('dir', ['rtl', 'ltr', 'auto'], 'auto', 'ButtonGroup'),
  disabled: boolean('disabled', false, 'ButtonGroup'),
  width: text('width', '100%', 'ButtonGroup')
});

export const buttonOneProps = () => ({
  disabled: boolean('disabled (1)', false, 'Button One'),
  look: select('look (1)', ['default', 'bare', 'flat', 'outline'], 'default', 'Button One'),
  icon: select('icon (1)', icons, null, 'Button One'),
  iconClass: text('iconClass (1)', null, 'Button One'),
  imageAlt: text('imageAlt (1)', null, 'Button One'),
  imageUrl: text('imageUrl (1)', null, 'Button One'),
  primary: boolean('primary (1)', false, 'Button One'),
  onAbort: action('abort'),
  onAbortCapture: action('abortCapture'),
  onAnimationEnd: action('animationEnd'),
  onAnimationEndCapture: action('animationEndCapture'),
  onAnimationIteration: action('animationIteration'),
  onClick: action('click'),
  selected: boolean('selected (1)', false, 'Button One'),
  title: text('title (1)', null, 'Button One'),
  togglable: boolean('togglable (1)', false, 'Button One')
});

export const buttonTwoProps = () => ({
  disabled: boolean('disabled (2)', false, 'Button Two'),
  look: select('look (2)', ['default', 'bare', 'flat', 'outline'], 'default', 'Button Two'),
  icon: select('icon (2)', icons, null, 'Button Two'),
  iconClass: text('iconClass (2)', null, 'Button Two'),
  imageAlt: text('imageAlt (2)', null, 'Button Two'),
  imageUrl: text('imageUrl (2)', null, 'Button Two'),
  primary: boolean('primary (2)', false, 'Button Two'),
  onAbort: action('abort'),
  onAbortCapture: action('abortCapture'),
  onAnimationEnd: action('animationEnd'),
  onAnimationEndCapture: action('animationEndCapture'),
  onAnimationIteration: action('animationIteration'),
  onClick: action('click'),
  selected: boolean('selected (2)', false, 'Button Two'),
  title: text('title (2)', null, 'Button Two'),
  togglable: boolean('togglable (2)', false, 'Button Two')
});

export const buttonThreeProps = () => ({
  disabled: boolean('disabled (3)', false, 'Button Three'),
  look: select('look (3)', ['default', 'bare', 'flat', 'outline'], 'default', 'Button Three'),
  icon: select('icon (3)', icons, null, 'Button Three'),
  iconClass: text('iconClass (3)', null, 'Button Three'),
  imageAlt: text('imageAlt (3)', null, 'Button Three'),
  imageUrl: text('imageUrl (3)', null, 'Button Three'),
  primary: boolean('primary (3)', false, 'Button Three'),
  onAbort: action('abort'),
  onAbortCapture: action('abortCapture'),
  onAnimationEnd: action('animationEnd'),
  onAnimationEndCapture: action('animationEndCapture'),
  onAnimationIteration: action('animationIteration'),
  onClick: action('click'),
  selected: boolean('selected (3)', false, 'Button Three'),
  title: text('title (3)', null, 'Button Three'),
  togglable: boolean('togglable (3)', false, 'Button Three')
});

export default props;