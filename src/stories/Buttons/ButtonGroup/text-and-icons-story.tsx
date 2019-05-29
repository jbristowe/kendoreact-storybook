import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, ButtonGroup } from '@progress/kendo-react-buttons';
import props from './props';

storiesOf('Buttons/ButtonGroup', module).add('Text and Icons', () =>
  <ButtonGroup {...props()}>
    <Button togglable={true} icon="bold">Bold</Button>
    <Button togglable={true} icon="italic">Italic</Button>
    <Button togglable={true} icon="underline">Underline</Button>
  </ButtonGroup>
);