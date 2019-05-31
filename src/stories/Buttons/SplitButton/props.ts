import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

const props = () => ({
  buttonClass: text('buttonClass', undefined),
  className: text('className', undefined),
  dir: text('dir', undefined),
  disabled: boolean('disabled', false),
  icon: text('icon', undefined),
  iconClass: text('iconClass', undefined),
  imageUrl: text('imageUrl', undefined),
  look: select('look', ['default', 'bare', 'flat', 'outline'], 'default'),
  onAbort: action('abort'),
  onAbortCapture: action('abortCapture'),
  onAnimationEnd: action('animationEnd'),
  onAnimationEndCapture: action('animationEndCapture'),
  onAnimationIteration: action('animationIteration'),
  onClick: action('click'),
  primary: boolean('primary', false),
  selected: boolean('selected', false),
  title: text('title', undefined),
  text: text('text', undefined),
  togglable: boolean('togglable', false)
});

export default props;
