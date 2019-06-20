import React from 'react';
import { storiesOf } from '@storybook/react';
import { Chart } from '@progress/kendo-react-charts';
import 'hammerjs';
import chartProps from './props';

storiesOf('Charts/Chart', module).add('Empty', () => (
  <Chart {...chartProps()} />
));