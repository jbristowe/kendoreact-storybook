import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from '@progress/kendo-react-inputs';
import props from './props';

storiesOf('Inputs/Input', module).add('Overview', () =>
  <Input{...props()} />
);