import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import content from './content';

// const { Bold, Italic, Underline,
//   AlignLeft, AlignRight, AlignCenter,
//   Indent, Outdent,
//   OrderedList, UnorderedList,
//   Undo, Redo, Link, Unlink } = EditorTools;

export const props = () => ({
  // appearance knobs
  defaultContent: text('defaultContent', content, 'Appearance'),

  // behavior knobs

  // event actions

  // appearance
  style: {width:800}
});