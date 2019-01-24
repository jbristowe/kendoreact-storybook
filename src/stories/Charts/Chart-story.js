import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { array, boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartLegend
} from '@progress/kendo-react-charts';
import 'hammerjs';

const props = () => ({
});

const categories = [ 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011 ];
const series = [
  {
    name: 'India',
    data: [ 3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855 ]
  }, {
    name: 'Russian Federation',
    data: [ 4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3 ]
  }, {
    name: 'Germany',
    data: [ 0.010, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, -5.127, 3.690, 2.995 ]
  }, {
    name: 'World',
    data: [ 1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727 ]
  }];

const stories = storiesOf('Charts', module);
stories.addDecorator(withKnobs);
stories.addDecorator(checkA11y);

stories.add('Chart', () => (
  <Chart
    style={{ width:800 }}
    onAxisLabelClick={action('axisLabelClicked')}
    onDrag={action('dragged')}
    onDragEnd={action('dragEnded')}
    onDragStart={action('dragStarted')}
    onLegendItemClick={action('legendItemClicked')}
    onLegendItemHover={action('legendItemHovered')}
    onNoteClick={action('noteClicked')}
    onNoteHover={action('noteHovered')}
    onPlotAreaClick={action('plotAreaClicked')}
    onPlotAreaHover={action('plotAreaHovered')}
    onRender={action('rendered')}
    onSelect={action('selected')}
    onSelectEnd={action('selectEnded')}
    onSelectStart={action('selectStarted')}
    onSeriesClick={action('seriesClicked')}
    onSeriesHover={action('seriesHovered')}
    onZoom={action('zoomed')}
    onZoomEnd={action('zoomEnded')}
    onZoomStart={action('zoomStarted')}>
    <ChartTitle text={text('Title', 'Title')} />
    <ChartCategoryAxis>
      <ChartCategoryAxisItem categories={array('Categories', categories)} />
    </ChartCategoryAxis>
    <ChartSeries>
      {series.map((item, idx) => (
        <ChartSeriesItem key={idx} type="column" data={item.data} name={item.name} />
      ))}
    </ChartSeries>
  </Chart>
));