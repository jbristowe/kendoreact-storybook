import React from 'react';
import { storiesOf } from '@storybook/react';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';

storiesOf('Dialogs/Dialog', module).add('Action Buttons', () =>
  <div>
    <button className="k-button" onClick={this.toggleDialog}>Open Dialog</button>
    {this.state.visible && <Dialog title={"Delete Data"} onClose={this.toggleDialog}>
      <p style={{ margin: "25px", textAlign: "center" }}>This action cannot be undone.</p>
      <DialogActionsBar>
        <button className="k-button k-primary" onClick={this.toggleDialog}>Cancel</button>
        <button className="k-button" onClick={this.onDeleteData}>Delete</button>
      </DialogActionsBar>
    </Dialog>}
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
    this.toggleDialog = this.toggleDialog.bind(this);
    this.onDeleteData = this.onDeleteData.bind(this);
  }

  toggleDialog() {
    this.setState({
      visible: !this.state.visible
    });
  }

  onDeleteData() {
    alert("Data deleted.");
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <div>
        <button className="k-button" onClick={this.toggleDialog}>Open Dialog</button>
        {this.state.visible && <Dialog title={"Delete Data"} onClose={this.toggleDialog}>
          <p style={{ margin: "25px", textAlign: "center" }}>This action cannot be undone.</p>
          <DialogActionsBar>
            <button className="k-button k-primary" onClick={this.toggleDialog}>Cancel</button>
            <button className="k-button" onClick={this.onDeleteData}>Delete</button>
          </DialogActionsBar>
        </Dialog>}
      </div>
    );
  }
}

const stories = storiesOf('Dialogs/Dialog', module);

stories.add('Action Buttons', () =>
  <App />
);