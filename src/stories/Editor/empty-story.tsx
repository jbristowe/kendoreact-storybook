import React from 'react';
import { storiesOf } from '@storybook/react';
import { Editor } from '@progress/kendo-react-editor';
import props from './props';

storiesOf('Editor', module).add('Empty', () =>
  <Editor {...props()} />
);