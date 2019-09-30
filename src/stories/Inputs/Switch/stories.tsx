import React from 'react';
import { boolean, number, text } from '@storybook/addon-knobs';
import { Switch } from '@progress/kendo-react-inputs';
import props from './props';

export default {
  title: 'Inputs/Switch'
};

export const Overview = () =>
  <Switch
    {...props()}
    checked={boolean('checked', false)}
    offLabel={text('offLabel', '')}
    onLabel={text('onLabel', '')}
    tabIndex={number('tabIndex', 0)}
  />
;