import { action } from '@storybook/addon-actions';
import { boolean, number, select, text } from '@storybook/addon-knobs';

const props = () => ({
  className: text('className', null),
  columnVirtualization: boolean('columnVirtualization', false),
  editField: text('editField', null),
  expandField: text('expandField', null),
  filterable: boolean('filterable', false),
  groupable: boolean('groupable', false),
  onColumnReorder: action('columnReordered'),
  onColumnResize: action('columnResized'),
  onDataStateChange: action('dataStateChanged'),
  onExpandChange: action('expandChanged'),
  onFilterChange: action('filterChanged'),
  onGroupChange: action('groupChanged'),
  onHeaderSelectionChange: action('headerSelectionChanged'),
  onItemChange: action('itemChanged'),
  onPageChange: action('pageChanged'),
  onRowClick: action('rowClicked'),
  onScroll: action('scrolled'),
  onSelectionChange: action('selectionChanged'),
  onSortChange: action('sortChanged'),
  pageSize: number('pageSize', 0),
  pageable: boolean('pageable', false),
  reorderable: boolean('reorderable', false),
  resizable: boolean('resizable', false),
  rowHeight: number('rowHeight', 0),
  scrollable: select('scrollable', ['none', 'scrollable', 'virtual'], 'none'),
  selectedField: text('selectedField', null),
  skip: number('skip', 0),
  sortable: boolean('sortable', false),
  style: {width: number('width', 800)},
  take: number('take', 0),
  total: number('total', 0)
});

export default props;