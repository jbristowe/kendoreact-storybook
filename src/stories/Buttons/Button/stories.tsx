import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Button } from '@progress/kendo-react-buttons';
import props from './props';

export default {
  component: Button,
  title: 'Buttons/Button'
};

export const Default = () =>
  <Button {...props()}>{text('text', 'This is the text...')}</Button>
;