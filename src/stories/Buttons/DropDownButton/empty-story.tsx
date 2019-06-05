import React from 'react';
import { storiesOf } from '@storybook/react';
import { DropDownButton } from '@progress/kendo-react-buttons';
import props from './props';

storiesOf('Buttons/DropDownButton', module).add('Empty', () =>
  <DropDownButton {...props()} />
);
