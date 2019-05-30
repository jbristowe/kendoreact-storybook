import { boolean } from '@storybook/addon-knobs';

const props = () => ({
  // behavior knobs
  disabled: boolean('disabled', false, 'Behavior'),
});

export default props;