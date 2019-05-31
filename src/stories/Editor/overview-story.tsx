import React from 'react';
import { storiesOf } from '@storybook/react';
import { Editor, EditorTools } from '@progress/kendo-react-editor';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import content from './content';
import props from './props';

const { Bold, Italic, Underline,
  AlignLeft, AlignRight, AlignCenter,
  Indent, Outdent,
  OrderedList, UnorderedList,
  Undo, Redo, Link, Unlink } = EditorTools;

storiesOf('Editor', module).add('Overview', () =>
  <Editor
    {...props()}
    defaultContent={text('defaultContent', content)}
    tools={[
      [ Bold, Italic, Underline ],
      [ Undo, Redo ],
      [ Link, Unlink ],
      [ AlignLeft, AlignCenter, AlignRight ],
      [ OrderedList, UnorderedList, Indent, Outdent ]
    ]}
  />, {
    knobs: {
      escapeHTML: false
    }
  }
);