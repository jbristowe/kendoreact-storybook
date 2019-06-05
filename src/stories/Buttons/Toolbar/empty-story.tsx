import React from 'react';
import { storiesOf } from '@storybook/react';
import { Toolbar } from '@progress/kendo-react-buttons';
import props from './props';

storiesOf('Buttons/Toolbar', module).add('Empty', () =>
  <Toolbar {...props()} />
);