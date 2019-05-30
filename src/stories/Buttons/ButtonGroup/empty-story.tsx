import React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonGroup } from '@progress/kendo-react-buttons';
import props from './props';

storiesOf('Buttons/ButtonGroup', module).add('Empty', () =>
  <ButtonGroup {...props()} />
);