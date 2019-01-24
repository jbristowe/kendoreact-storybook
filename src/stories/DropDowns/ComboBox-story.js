import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import { ComboBox } from '@progress/kendo-react-dropdowns';

const stories = storiesOf('DropDowns', module);
stories.addDecorator(withKnobs);
stories.addDecorator(checkA11y);

stories.add('ComboBox', () =>
  <ComboBox
    disabled={boolean('Disabled', false)}
  />
)