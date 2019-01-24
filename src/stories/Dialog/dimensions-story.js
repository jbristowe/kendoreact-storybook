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
  }

  toggleDialog() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <div>
        <button className="k-button" onClick={this.toggleDialog}>Open Dialog</button>
        {this.state.visible && <Dialog title={"Status"}onClose={this.toggleDialog} width={200} height={250}>
          <p style={{ margin: "25px", textAlign: "center" }}>Your escape pod is now ready.</p>
          <DialogActionsBar>
            <button className="k-button k-primary" onClick={this.toggleDialog}>Launch</button>
          </DialogActionsBar>
        </Dialog>}
      </div>
    );
  }
}

const stories = storiesOf('Dialog', module);
stories.addDecorator(withKnobs);
stories.addDecorator(checkA11y);

stories.add('Dialog - Dimensions', () =>
  <App />
);