import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import { Switch } from '@progress/kendo-react-inputs';

const stories = storiesOf('Inputs', module);
stories.addDecorator(withKnobs);
stories.addDecorator(checkA11y);

stories.add('Switch', () =>
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