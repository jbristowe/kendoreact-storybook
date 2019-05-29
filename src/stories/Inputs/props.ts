import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

const props = () => ({
  // behavior knobs
  disabled: boolean('disabled', false, 'Behavior'),

  // event actions
  onAbort: action('abort'),
  onAbortCapture: action('abortCapture'),
  onAnimationEnd: action('animationEnd'),
  onAnimationEndCapture: action('animationEndCapture'),
  onAnimationIteration: action('animationIteration'),
  onAnimationIterationCapture: action('animationIterationCapture'),
  onAnimationStart: action('animationStart'),
  onAnimationStartCapture: action('animationStartCapture'),
  onBlur: action('blur'),
  onBlurCapture: action('blurCapture'),
  onCanPlay: action('canPlay'),
  onCanPlayCapture: action('canPlayCapture'),
  onCanPlayThrough: action('canPlayThrough'),
  onCanPlayThroughCapture: action('canPlayThroughCapture'),
  onChange: action('change'),
  onChangeCapture: action('changeCapture'),
  onClick: action('click'),
  onClickCapture: action('clickCapture'),
  onCompositionEnd: action('compositionEnd'),
  onCompositionEndCapture: action('compositionEndCapture'),
  onCompositionStart: action('compositionStart'),
  onCompositionStartCapture: action('compositionStartCapture'),
  onCompositionUpdate: action('compositionUpdate'),
  onCompositionUpdateCapture: action('compositionUpdateCapture'),
  onContextMenu: action('contextMenu'),
  onContextMenuCapture: action('contextMenuCapture'),
  onCopy: action('copy'),
  onCopyCapture: action('copyCapture'),
  onFocus: action('focus')
});

export default props;