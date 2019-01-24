import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import { TimePicker } from '@progress/kendo-react-dateinputs';

const stories = storiesOf('DateInputs', module);
stories.addDecorator(withKnobs);
stories.addDecorator(checkA11y);

stories.add('TimePicker', () =>
  <TimePicker
    disabled={boolean('Disabled', false)}
  />
);