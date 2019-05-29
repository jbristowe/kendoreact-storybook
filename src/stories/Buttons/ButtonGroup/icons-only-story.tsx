import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, ButtonGroup } from '@progress/kendo-react-buttons';
import props from './props';

storiesOf('Buttons/ButtonGroup', module).add('Icons Only', () =>
  <ButtonGroup {...props()}>
    <Button togglable={true} icon="bold"></Button>
    <Button togglable={true} icon="italic"></Button>
    <Button togglable={true} icon="underline"></Button>
  </ButtonGroup>
);