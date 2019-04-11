import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { MaskedTextBox } from '@progress/kendo-react-inputs';

storiesOf('Inputs/MaskedTextBox', module).add('Overview', () =>
  <MaskedTextBox
    disabled={boolean('Disabled', false)}
  />
);