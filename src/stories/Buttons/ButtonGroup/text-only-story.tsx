import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, ButtonGroup } from '@progress/kendo-react-buttons';
import props from './props';

storiesOf('Buttons/ButtonGroup', module).add('Text Only', () =>
  <ButtonGroup {...props()}>
    <Button togglable={true}>
      Bold
    </Button>
    <Button togglable={true}>
      Italic
    </Button>
    <Button togglable={true}>
      Underline
    </Button>
  </ButtonGroup>
);