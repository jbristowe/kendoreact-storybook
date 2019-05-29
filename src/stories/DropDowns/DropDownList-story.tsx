import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { DropDownList } from '@progress/kendo-react-dropdowns';

storiesOf('DropDowns/DropDownList', module).add('Overview', () =>
  <DropDownList
    disabled={boolean('Disabled', false)}
  />
);