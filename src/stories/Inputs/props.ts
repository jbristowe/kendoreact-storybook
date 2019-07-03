import { boolean, text } from '@storybook/addon-knobs';

const props = () => ({
  // defaultValue: text('defaultValue', null),
  label: text('label', null),
  valid: boolean('valid', true),
  validationMessage: text('validationMessage', null),
  validityStyles: boolean('validityStyles', true)
});

export const NumericTextBoxProps = () => ({
  ...props()
});

export default props;