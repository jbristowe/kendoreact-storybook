import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import { MultiSelect } from '@progress/kendo-react-dropdowns';

const stories = storiesOf('DropDowns', module);
stories.addDecorator(withKnobs);
stories.addDecorator(checkA11y);

stories.add('MultiSelect', () =>
  <MultiSelect
    disabled={boolean('Disabled', false)}
  />
);