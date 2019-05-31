import { boolean, number, text } from '@storybook/addon-knobs';

const props = () => ({
  draggable: boolean('draggable', true),
  height: number('height', undefined, undefined),
  title: text('title', undefined)
});

export default props;