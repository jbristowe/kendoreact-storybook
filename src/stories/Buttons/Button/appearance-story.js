import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@progress/kendo-react-buttons';
import { props } from './props';

storiesOf('Buttons/Button', module).add('Appearance', () =>
  <Button {...props()}>This is the text...</Button>
);