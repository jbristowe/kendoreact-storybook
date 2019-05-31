import React from 'react';
import { storiesOf } from '@storybook/react';
import { Window } from '@progress/kendo-react-dialogs';
import props from './props';

storiesOf('Dialogs/Window', module).add('Empty', () =>
  <Window {...props()} />
);