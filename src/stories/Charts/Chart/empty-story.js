import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Chart } from '@progress/kendo-react-charts';
import 'hammerjs';
import { props } from './props';

storiesOf('Charts/Chart', module).add('Empty', () => {
  return (
    <Chart {...props()}>
    </Chart>
  )
});