import React from 'react';
import { storiesOf } from '@storybook/react';
import { SplitButton, SplitButtonItem } from '@progress/kendo-react-buttons';
import props, { splitButtonItemOneProps, splitButtonItemTwoProps, splitButtonItemThreeProps } from './props';

storiesOf('Buttons/SplitButton', module).add('Default', () =>
  <SplitButton {...props()}>
    <SplitButtonItem {...splitButtonItemOneProps()} />
    <SplitButtonItem {...splitButtonItemTwoProps()} />
    <SplitButtonItem {...splitButtonItemThreeProps()} />
  </SplitButton>
);