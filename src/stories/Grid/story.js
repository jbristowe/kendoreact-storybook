import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, number, withKnobs } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import { Grid, GridColumn, GridCell } from '@progress/kendo-react-grid';
import products from './products.json';

class CustomCell extends GridCell {
  render() {
    return (
      <td>
        <input disabled type="checkbox" checked={this.props.dataItem[this.props.field]} />
      </td>
    );
  }
}

const stories = storiesOf('Grid', module);
stories.addDecorator(withKnobs);
stories.addDecorator(checkA11y);

stories.add('Overview', () =>
  <Grid
    data={products}
    filterable={boolean('Filterable', false)}
    groupable={boolean('Groupable', false)}
    onColumnReorder={action('columnReordered')} 
    onColumnResize={action('columnResized')}
    onDataStateChange={action('dataStateChanged')}
    onExpandChange={action('expandChanged')}
    onFilterChange={action('filterChanged')}
    onSortChange={action('sortChanged')}
    pageable={boolean('Pageable', false)}
    pageSize={number('Page Size')}
    reorderable={boolean('Reorderable', false)}
    resizable={boolean('Resizable', false)}
    skip={number('Skip')}
    sortable={boolean('Sortable')}
    take={number('Take')}
    total={number('Total')}
    >
      <GridColumn field="ProductID" title="ID" />
      <GridColumn field="ProductName" title="Name" />
      <GridColumn field="Category.CategoryName" title="Category" />
      <GridColumn field="UnitPrice" title="Price" />
      <GridColumn field="UnitsInStock" title="In stock" />
      <GridColumn field="Discontinued" title="Discontinued" cell={CustomCell} />
  </Grid>
);