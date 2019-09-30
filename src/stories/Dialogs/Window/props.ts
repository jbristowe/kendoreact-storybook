import { boolean, number, text } from '@storybook/addon-knobs';

const props = () => ({
  draggable: boolean('draggable', true),
  height: number('height', 0),
  title: text('title', '')
});

export default props;