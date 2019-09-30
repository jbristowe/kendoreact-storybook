import { boolean, text } from '@storybook/addon-knobs';

const props = () => ({
  // defaultValue: text('defaultValue', ''),
  label: text('label', ''),
  valid: boolean('valid', true),
  validationMessage: text('validationMessage', ''),
  validityStyles: boolean('validityStyles', true)
});

export default props;