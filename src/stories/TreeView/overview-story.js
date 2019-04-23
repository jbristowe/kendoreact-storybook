import React from 'react';
import { storiesOf } from '@storybook/react';
import { TreeView } from '@progress/kendo-react-treeview';
import { props } from './props';

storiesOf('TreeView', module).add('Overview', () => {
  return (
    <TreeView {...props()} />
  )
});