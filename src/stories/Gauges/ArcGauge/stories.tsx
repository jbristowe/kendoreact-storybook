import React from 'react';
import { ArcGauge } from '@progress/kendo-react-gauges';
import props from './props';

export default {
  title: 'Gauges/ArcGauge'
};

export const Empty = () =>
  <ArcGauge {...props()} />
;