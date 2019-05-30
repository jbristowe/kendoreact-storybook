import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from '@progress/kendo-react-grid';
import props from './props';

storiesOf('Grid', module).add('Empty', () =>
  <Grid {...props()} />
);