import React from 'react';
import { storiesOf } from '@storybook/react';
import { ComboBox } from '@progress/kendo-react-dropdowns';
import props from './props';

storiesOf('DropDowns/ComboBox', module).add('Empty', () =>
  <ComboBox {...props()} />
);