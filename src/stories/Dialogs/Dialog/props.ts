import { number, text } from '@storybook/addon-knobs';

const props = () => ({
  height: number('height', 250),
  title: text('title', ''),
  width: number('width', 200)
});

export default props;