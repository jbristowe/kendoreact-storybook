import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

export const props = () => ({
  // appearance knobs
  primary: boolean('primary', false, 'Appearance'),
  look: select('look', [ 'default', 'bare', 'flat', 'outline' ], 'default', 'Appearance'),
  icon: text('icon', '', 'Appearance'),
  iconClass: text('iconClass', '', 'Appearance'),
  imageAlt: text('imageAlt', '', 'Appearance'),
  imageUrl: text('imageUrl', '', 'Appearance'),
  selected: boolean('selected', false, 'Appearance'),

  // behavior knobs
  disabled: boolean('disabled', false, 'Behavior'),

  title: text('title'),
  toggable: boolean('toggable'),
  value: text('value'),

  // event actions
  onAbort: action('abort'),
  onAbortCapture: action('abortCapture'),
  onAnimationEnd: action('animationEnd'),
  onAnimationEndCapture: action('animationEndCapture'),
  onClick: action('click')
});