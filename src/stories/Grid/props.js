import { action } from '@storybook/addon-actions';
import { boolean, number } from '@storybook/addon-knobs';

export const props = () => ({
  // appearance knobs
  filterable: boolean('filterable', false, 'Appearance'),
  groupable: boolean('groupable', false, 'Appearance'),
  pageable: boolean('pageable', false, 'Appearance'),
  pageSize: number('pageSize', 0, {}, 'Appearance'),
  reorderable: boolean('reorderable', false, 'Appearance'),
  resizable: boolean('resizable', false, 'Appearance'),
  skip: number('skip', 0, {}, 'Appearance'),
  sortable: boolean('sortable', 0, 'Appearance'),
  take: number('take', 0, {}, 'Appearance'),
  total: number('total', 0, {}, 'Appearance'),

  // behavior knobs
  disabled: boolean('disabled', false, 'Behavior'),

  // event actions
  onColumnReorder: action('columnReordered'),
  onColumnResize: action('columnResized'),
  onDataStateChange: action('dataStateChanged'),
  onExpandChange: action('expandChanged'),
  onFilterChange: action('filterChanged'),
  onSortChange: action('sortChanged'),

  // appearance
  style: {width:800}
});