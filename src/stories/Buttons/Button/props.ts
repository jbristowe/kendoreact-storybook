import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { icons } from '../../../utils/icons';

const props = () => ({
  disabled: boolean('disabled', false),
  look: select('look', ['default', 'flat', 'bare', 'outline'], 'default'),
  icon: select('icon', icons, null),
  iconClass: text('iconClass', null),
  imageAlt: text('imageAlt', null),
  imageUrl: text('imageUrl', null),
  primary: boolean('primary', false),
  onAbort: action('abort'),
  onAbortCapture: action('abortCapture'),
  onAnimationEnd: action('animationEnd'),
  onAnimationEndCapture: action('animationEndCapture'),
  onAnimationIteration: action('animationIteration'),
  onClick: action('click'),
  selected: boolean('selected', false),
  title: text('title', null),
  togglable: boolean('togglable', false)
});

export default props;