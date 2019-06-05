import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

const props = () => ({
  disabled: boolean('disabled', undefined),
  look: select('look', ['default', 'bare', 'flat', 'outline'], 'default'),
  icon: text('icon', undefined),
  iconClass: text('iconClass', undefined),
  imageAlt: text('imageAlt', undefined),
  imageUrl: text('imageUrl', undefined),
  primary: boolean('primary', false),
  onAbort: action('abort'),
  onAbortCapture: action('abortCapture'),
  onAnimationEnd: action('animationEnd'),
  onAnimationEndCapture: action('animationEndCapture'),
  onAnimationIteration: action('animationIteration'),
  onClick: action('click'),
  selected: boolean('selected', false),
  title: text('title', undefined),
  text: text('text', 'User Settings'),
  togglable: boolean('togglable', false)
});

export default props;
