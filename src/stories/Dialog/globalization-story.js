import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div dir="rtl" >
        <Dialog onClose={this.ToggleDialog}>
          <p style={{ margin: "25px", textAlign: "center" }}>Are you sure you want continue?</p>
          <DialogActionsBar>
            <button className="k-button">No</button>
            <button className="k-button">Yes</button>
          </DialogActionsBar>
        </Dialog>
      </div>
    );
  }
}

const stories = storiesOf('Dialog', module);
stories.addDecorator(withKnobs);
stories.addDecorator(checkA11y);

stories.add('Dialog - Globalization', () =>
  <App />
);