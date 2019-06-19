import { action } from '@storybook/addon-actions';
import { select, boolean } from '@storybook/addon-knobs';

const props = () => ({
  dir: select('dir', ['rtl', 'ltr', 'auto'], 'auto'),
  onAxisLabelClick: action('axisLabelClick'),
  onDrag: action('drag'),
  onDragEnd: action('dragEnd'),
  onDragStart: action('dragStart'),
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
  pannable: boolean('pannable', false),
  renderAs: select('renderAs', [ 'svg', 'canvas' ], 'svg'),
  style: {width:800},
  transitions: boolean('transitions', true),
  zoomable: boolean('zoomable', false)
});

export default props;
