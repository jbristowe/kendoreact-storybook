import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, number, text } from '@storybook/addon-knobs';
import { Switch } from '@progress/kendo-react-inputs';

storiesOf('Inputs/Switch', module).add('Overview', () =>
  <Switch
    checked={boolean('checked')}
    disabled={boolean('disabled', false)}
    onBlur={action('blur')}
    onChange={action('change')}
    onFocus={action('focus')}
    offLabel={text('offLabel')}
    onLabel={text('onLabel')}
    tabIndex={number('tabIndex')}
  />
);