import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { Button } from '@progress/kendo-react-buttons';
import props from './props';

storiesOf('Buttons/Button', module).add('Default', () =>
  <Button {...props()}>{text('text', 'This is the text...')}</Button>
);