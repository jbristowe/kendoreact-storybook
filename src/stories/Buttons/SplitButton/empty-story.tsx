import React from 'react';
import { storiesOf } from '@storybook/react';
import { SplitButton } from '@progress/kendo-react-buttons';
import props from './props';

storiesOf('Buttons/SplitButton', module).add('Empty', () =>
  <SplitButton {...props()} />
);