import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';

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

const stories = storiesOf('Dialog', module);
stories.addDecorator(withKnobs);
stories.addDecorator(checkA11y);

stories.add('Dialog - Action Buttons', () =>
  <App />
);