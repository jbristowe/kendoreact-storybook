import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

const props = () => ({
  buttonClass: text('buttonClass', null),
  className: text('className', null),
  dir: text('dir', null),
  disabled: boolean('disabled', false),
  icon: text('icon', null),
  iconClass: text('iconClass', null),
  imageUrl: text('imageUrl', null),
  look: select('look', ['default', 'bare', 'flat', 'outline'], 'default'),
  onAbort: action('abort'),
  onAbortCapture: action('abortCapture'),
  onAnimationEnd: action('animationEnd'),
  onAnimationEndCapture: action('animationEndCapture'),
  onAnimationIteration: action('animationIteration'),
  onClick: action('click'),
  primary: boolean('primary', false),
  selected: boolean('selected', false),
  title: text('title', null),
  text: text('text', null),
  togglable: boolean('togglable', false)
});

export default props;
