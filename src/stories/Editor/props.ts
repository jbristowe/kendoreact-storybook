import { EditorTools } from "@progress/kendo-react-editor";

const { Bold, Italic, Underline,
  AlignLeft, AlignRight, AlignCenter,
  Indent, Outdent,
  OrderedList, UnorderedList,
  Undo, Redo, Link, Unlink } = EditorTools;

export const props = () => ({
  tools: [ EditorTools.Bold ],
  style: {width:800},
});

export default props;