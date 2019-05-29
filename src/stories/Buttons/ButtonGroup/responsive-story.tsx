import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, ButtonGroup } from '@progress/kendo-react-buttons';
import props from './props';

storiesOf('Buttons/ButtonGroup', module).add('Responsive', () =>
  <div className="row" {...props()}>
    <div className="col-xs-12 col-sm-6 example-col">
      <ButtonGroup width="100%">
        <Button togglable={true} icon="bold">Bold</Button>
        <Button togglable={true} icon="italic">Italic</Button>
        <Button togglable={true} icon="underline">Underline</Button>
      </ButtonGroup>
    </div>
  </div>
);