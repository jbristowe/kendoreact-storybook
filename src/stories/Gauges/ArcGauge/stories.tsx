import React from 'react';
import { ArcGauge } from '@progress/kendo-react-gauges';
import props, { emptyProps } from './props';

export default {
  title: 'Gauges/ArcGauge'
};

export const Empty = () =>
  <ArcGauge {...emptyProps()} />
;

export const Default = () =>
  <ArcGauge {...props()} />
;