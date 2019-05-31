import { boolean, number, select } from '@storybook/addon-knobs';

const props = () => ({
  activeRangeEnd: select('activeRangeEnd', ['start', 'end', null], undefined),
  allowReverse: boolean('allowReverse', undefined),
  bottomView: select('bottomView', ['month', 'year', 'decade', 'century'], 'month'),
  defaultActiveView: select('defaultActiveView', ['month', 'year', 'decade', 'century'], 'month'),
  mode: select('mode', ['single', 'multiple', 'range'], undefined),
  topView: select('topView', ['month', 'year', 'decade', 'century'], 'month'),
  views: number('views', 0),
});

export default props;