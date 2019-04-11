import { action } from '@storybook/addon-actions';
import { boolean, select, text, object } from '@storybook/addon-knobs';

export const props = () => ({
  // appearance knobs
  primary: boolean('primary', false, 'Appearance'),
  look: select('look', [ 'default', 'bare', 'flat', 'outline' ], 'default', 'Appearance'),
  icon: text('icon', '', 'Appearance'),
  iconClass: text('iconClass', '', 'Appearance'),
  imageAlt: text('imageAlt', '', 'Appearance'),
  imageUrl: text('imageUrl', '', 'Appearance'),
  selected: boolean('selected', false, 'Appearance'),
  title: text('title', '', 'Appearance'),

  // behavior knobs
  disabled: boolean('disabled', false, 'Behavior'),
  togglable: boolean('togglable', false, 'Behavior'),
  value: text('value', '', 'Behavior'),

  // event actions
  onAbort: action('abort'),
  onAbortCapture: action('abortCapture'),
  onAnimationEnd: action('animationEnd'),
  onAnimationEndCapture: action('animationEndCapture'),
  onAnimationIteration: action('animationIteration'),
  onClick: action('click'),

  // appearance
  style: {width:800}
});