import { boolean, color, select, number } from '@storybook/addon-knobs';

export const emptyProps = () => ({
  value: number('value', 0)
})

const props = () => ({
  color: color('color', undefined),
  disabled: boolean('disabled', false),
  opacity: number('opacity', 1, { range: true, min: 0, max: 1, step: 0.001 }),
  renderAs: select('renderAs', [ 'svg', 'canvas' ], 'svg'),
  transitions: boolean('transitions', true),
  value: number('value', 0)
});

export default props;