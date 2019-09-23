import React from 'react';
import { TreeView } from '@progress/kendo-react-treeview';
import props from './props';
import data from './data';

export default {
  title: 'TreeView'
};

export const Empty = () =>
  <TreeView {...props()} />
;

export const Overview = () =>
  <TreeView {...props()} data={data} />
;