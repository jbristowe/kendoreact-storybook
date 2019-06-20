import { action } from '@storybook/addon-actions';
import { boolean, color, number, select, text } from '@storybook/addon-knobs';

const chartProps = () => ({
  dir: select('dir', ['rtl', 'ltr', 'auto'], 'auto', 'Chart'),
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
  pannable: boolean('pannable', false, 'Chart'),
  renderAs: select('renderAs', [ 'svg', 'canvas' ], 'svg', 'Chart'),
  style: {width:800},
  transitions: boolean('transitions', true, 'Chart'),
  zoomable: boolean('zoomable', false, 'Chart')
});

export const chartTitleProps = () => ({
  align: select('align (Title)', ['center', 'left', 'right'], 'center', 'Title'),
  background: color('background (Title)', '#fff', 'Title'),
  color: color('color (Title)', '#000', 'Title'),
  font: text('font (Title)', null, 'Title'),
  margin: number('margin (Title)', 0, {}, 'Title'),
  padding: number('padding (Title)', 0, {}, 'Title'),
  position: select('position (Title)', ['top', 'bottom'], 'top', 'Title'),
  text: text('text (Title)', 'Chart Title', 'Title'),
  visible: boolean('visible (Title)', true, 'Title')
});

export const chartAreaProps = () => ({
  background: color('background (Area)', '#fff', 'Area'),
  height: number('height (Area)', 400, {}, 'Area'),
  margin: number('margin (Area)', 0, {}, 'Area'),
  opacity: number('opacity (Area)', 1, { range: true, min: 0, max: 1, step: 0.001 }, 'Area'),
  width: number('width (Area)', 800, {}, 'Area')
});

export default chartProps;