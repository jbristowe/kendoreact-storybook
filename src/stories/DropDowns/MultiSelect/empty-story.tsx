import React from 'react';
import { storiesOf } from '@storybook/react';
import { MultiSelect } from '@progress/kendo-react-dropdowns';
import props from './props';

storiesOf('DropDowns/MultiSelect', module).add('Empty', () =>
  <MultiSelect {...props()} />
);