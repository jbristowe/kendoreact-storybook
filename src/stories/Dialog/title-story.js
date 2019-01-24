import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import { Dialog } from '@progress/kendo-react-dialogs';
import { text } from '@storybook/addon-knobs/dist/base';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Dialog title={text('title', 'Awesome title goes here')} />
    );
  }
}

const stories = storiesOf('Dialog', module);
stories.addDecorator(withKnobs);
stories.addDecorator(checkA11y);

stories.add('Dialog - Title', () =>
  <App />
);