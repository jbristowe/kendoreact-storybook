import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { MultiSelect } from '@progress/kendo-react-dropdowns';

storiesOf('DropDowns/MultiSelect', module).add('Overview', () =>
  <MultiSelect
    disabled={boolean('Disabled', false)}
  />
);