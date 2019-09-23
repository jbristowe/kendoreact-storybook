import React from 'react';
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

export default {
  title: 'Grid'
};

export const Empty = () =>
  <Grid {...props()} />
;

export const NoData = () =>
  <Grid {...props()}>
    <GridColumn title="ID" />
    <GridColumn title="Name" />
    <GridColumn title="Category" />
    <GridColumn title="Price" />
  </Grid>
;

export const WithData = () =>
  <Grid data={products} {...props()}>
    <GridColumn field="ProductID" title="ID" />
    <GridColumn field="ProductName" title="Name" />
    <GridColumn field="Category.CategoryName" title="Category" />
    <GridColumn field="UnitPrice" title="Price" format="{0:c}" />
    <GridColumn field="UnitsInStock" title="In stock" />
    <GridColumn field="Discontinued" title="Discontinued" cell={CustomCell} />
  </Grid>
;