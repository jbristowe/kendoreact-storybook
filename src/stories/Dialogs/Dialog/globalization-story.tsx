import React from 'react';
import { storiesOf } from '@storybook/react';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';

class App extends React.Component {
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

const stories = storiesOf('Dialogs/Dialog', module);

stories.add('Globalization', () =>
  <App />
);