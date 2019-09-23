import React from 'react';
import { SplitButton, SplitButtonItem } from '@progress/kendo-react-buttons';
import props, { splitButtonItemOneProps, splitButtonItemTwoProps, splitButtonItemThreeProps } from './props';

export default {
  title: 'Buttons/SplitButton'
};

export const Default = () =>
  <SplitButton {...props()}>
    <SplitButtonItem {...splitButtonItemOneProps()} />
    <SplitButtonItem {...splitButtonItemTwoProps()} />
    <SplitButtonItem {...splitButtonItemThreeProps()} />
  </SplitButton>
;