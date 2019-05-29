import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';

const props = () => ({
  // behavior knobs
  disabled: boolean('disabled', false, 'Behavior'),
  renderAs: select('renderAs', [ 'svg', 'canvas' ], 'svg', 'Behavior'),

  // event actions
  onAxisLabelClick: action('axisLabelClick'),
  onLegendItemClick: action('legendItemClick'),
  onLegendItemHover: action('legendItemHover'),
  onNoteClick: action('noteClick'),
  onNoteHover: action('noteHover'),
  onPlotAreaClick: action('plotAreaClick'),
  onPlotAreaHover: action('plotAreaHover'),
  onRender: action('render'),
  onSelect: action('select'),
  onSelectEnd: action('selectEnd'),
  onSelectStart: action('selectStart'),
  onSeriesClick: action('seriesClick'),
  onSeriesHover: action('seriesHover'),
  onZoom: action('zoom'),
  onZoomEnd: action('zoomEnd'),
  onZoomStart: action('zoomStart'),
  onDrag: action('drag'),
  onDragEnd: action('dragEnd'),
  onDragStart: action('dragStart'),

  // appearance
  style: {width:800},
});

export default props;
