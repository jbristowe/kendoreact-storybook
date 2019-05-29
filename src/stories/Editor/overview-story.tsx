import React from 'react';
import { storiesOf } from '@storybook/react';
import { Editor, EditorTools } from '@progress/kendo-react-editor';
import props from './props';

const { Bold, Italic, Underline,
  AlignLeft, AlignRight, AlignCenter,
  Indent, Outdent,
  OrderedList, UnorderedList,
  Undo, Redo, Link, Unlink } = EditorTools;

storiesOf('Editor', module).add('Overview', () =>
  <Editor
   {...props()}
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