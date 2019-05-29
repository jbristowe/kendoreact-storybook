import { select } from '@storybook/addon-knobs';

const props = () => ({
  animationType: select('animationType', ['slide', 'push', 'expand', 'fade', 'zoom', 'reveal'], 'slide', 'Appearance'),
});

export default props;
