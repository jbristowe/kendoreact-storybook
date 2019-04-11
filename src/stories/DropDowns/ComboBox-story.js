import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { ComboBox } from '@progress/kendo-react-dropdowns';

storiesOf('DropDowns/ComboBox', module).add('Overview', () =>
  <ComboBox
    disabled={boolean('Disabled', false)}
  />
)