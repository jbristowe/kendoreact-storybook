import { boolean } from '@storybook/addon-knobs';

const props = () => ({
  disabled: boolean('disabled', false, 'Behavior'),
});

export default props;