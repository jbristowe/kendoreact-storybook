import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoComplete } from '@progress/kendo-react-dropdowns';
import props from './props';

storiesOf('DropDowns/AutoComplete', module).add('Empty', () =>
  <AutoComplete {...props()} />
);