import React from 'react';
import { Editor } from '@progress/kendo-react-editor';
import { text } from '@storybook/addon-knobs';
import content from './content';
import props from './props';

export default {
  title: 'Editor'
};

export const Empty = () =>
  <Editor {...props()} />
;

export const Overview = () =>
  <Editor {...props()} defaultContent={text('defaultContent', content)} />
;