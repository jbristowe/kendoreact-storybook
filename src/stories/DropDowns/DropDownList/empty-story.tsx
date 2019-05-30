import React from 'react';
import { storiesOf } from '@storybook/react';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import props from './props';

storiesOf('DropDowns/DropDownList', module).add('Empty', () =>
  <DropDownList {...props()} />
);