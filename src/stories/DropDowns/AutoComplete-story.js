import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { AutoComplete } from '@progress/kendo-react-dropdowns';

storiesOf('DropDowns/AutoComplete', module).add('Overview', () =>
  <AutoComplete
    disabled={boolean('Disabled', false)}
  />
)