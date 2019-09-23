import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Button, ButtonGroup } from '@progress/kendo-react-buttons';
import props, { buttonOneProps, buttonTwoProps, buttonThreeProps } from './props';

export default {
  title: 'Buttons/ButtonGroup'
};

export const Default = () =>
  <ButtonGroup {...props()}>
    <Button {...buttonOneProps()}>{text('text (1)', 'This is the text...', 'Button One')}</Button>
    <Button {...buttonTwoProps()}>{text('text (2)', 'This is the text...', 'Button Two')}</Button>
    <Button {...buttonThreeProps()}>{text('text (3)', 'This is the text...', 'Button Three')}</Button>
  </ButtonGroup>
;