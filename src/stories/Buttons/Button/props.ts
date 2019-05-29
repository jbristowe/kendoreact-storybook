import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

const props = () => ({
  // appearance knobs
  look: select('look', ['default', 'bare', 'flat', 'outline'], 'default', 'Appearance'),
  icon: text('icon', '', 'Appearance'),
  iconClass: text('iconClass', '', 'Appearance'),
  imageAlt: text('imageAlt', '', 'Appearance'),
  imageUrl: text('imageUrl', '', 'Appearance'),
  primary: boolean('primary', false, 'Appearance'),
  selected: boolean('selected', false, 'Appearance'),
  title: text('title', '', 'Appearance'),
  text: text('text', 'User Settings', 'Appearance'),

  // behavior knobs
  disabled: boolean('disabled', false, 'Behavior'),
  togglable: boolean('togglable', false, 'Behavior'),

  // event actions
  onAbort: action('abort'),
  onAbortCapture: action('abortCapture'),
  onAnimationEnd: action('animationEnd'),
  onAnimationEndCapture: action('animationEndCapture'),
  onAnimationIteration: action('animationIteration'),
  onClick: action('click'),
});

export default props;
