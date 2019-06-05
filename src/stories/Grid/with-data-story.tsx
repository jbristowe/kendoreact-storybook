import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid, GridColumn, GridCell } from '@progress/kendo-react-grid';
import props from './props';
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

storiesOf('Grid', module).add('With Data', () =>
  <Grid data={products} {...props()}>
    <GridColumn field="ProductID" title="ID" />
    <GridColumn field="ProductName" title="Name" />
    <GridColumn field="Category.CategoryName" title="Category" />
    <GridColumn field="UnitPrice" title="Price" format="{0:c}" />
    <GridColumn field="UnitsInStock" title="In stock" />
    <GridColumn field="Discontinued" title="Discontinued" cell={CustomCell} />
  </Grid>
);