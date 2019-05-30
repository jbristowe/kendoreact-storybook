import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import props from './props';

storiesOf('Grid', module).add('No Data', () =>
  <Grid {...props()}>
    <GridColumn title="ID" />
    <GridColumn title="Name" />
    <GridColumn title="Category" />
    <GridColumn title="Price" />
  </Grid>
);