import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, text } from '@storybook/addon-knobs';
import { Switch } from '@progress/kendo-react-inputs';
import props from './props';

storiesOf('Inputs/Switch', module).add('Overview', () =>
  <Switch
    {...props()}
    checked={boolean('checked', false)}
    offLabel={text('offLabel', null)}
    onLabel={text('onLabel', null)}
    tabIndex={number('tabIndex', 0)}
  />
);