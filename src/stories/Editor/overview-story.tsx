import React from 'react';
import { storiesOf } from '@storybook/react';
import { Editor } from '@progress/kendo-react-editor';
import { text } from '@storybook/addon-knobs';
import content from './content';
import props from './props';

storiesOf('Editor', module).add('Overview', () =>
  <Editor {...props()} defaultContent={text('defaultContent', content)} />, {
    knobs: {
      escapeHTML: false
    }
  }
);