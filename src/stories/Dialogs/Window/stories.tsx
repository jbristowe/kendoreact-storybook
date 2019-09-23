import React from 'react';
import { Window } from '@progress/kendo-react-dialogs';
import props from './props';

export default {
  title: 'Dialogs/Window'
};

export const Empty = () =>
  <Window {...props()} />
;