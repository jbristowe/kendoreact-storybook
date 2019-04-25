import React from 'react';
import { storiesOf } from '@storybook/react';
import { MaskedTextBox } from '@progress/kendo-react-inputs';
import { props } from './props';

storiesOf('Inputs/MaskedTextBox', module).add('Overview', () =>
  <MaskedTextBox {...props()} />
);