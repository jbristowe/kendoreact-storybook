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
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose = () => {
    this.setState({
      visible: false
    });
  }
  render() {
    return (
      <div>
        { this.state.visible && <Dialog height={300} width={450} onClose={this.handleClose}>
          <p style={{ margin: "25px", textAlign: "center" }}>Add Delivery Address</p>
          <div>
            <div>
              <label>
                <span style={{ display: "inline-block", width: "50px", textAlign: "right", paddingRight: "0.5em" }}>Street:</span>
                <input type="text" style={{ width: "27em", maxWidth: "70%" }} autoFocus={true}/>
              </label>
            </div>
            <div>
              <label>
                <span style={{ display: "inline-block", width: "50px", textAlign: "right", paddingRight: "0.5em" }}>City:</span>
                <input type="text" style={{ width: "27em", maxWidth: "70%" }}/>
              </label>
            </div>
            <div>
              <label>
                <span style={{ display: "inline-block", width: "50px", textAlign: "right", paddingRight: "0.5em" }}>State:</span>
                <input type="text" style={{ width: "27em", maxWidth: "70%" }}/>
              </label>
            </div>
            <div>
              <label>
                <span style={{ display: "inline-block", width: "50px", textAlign: "right", paddingRight: "0.5em" }}>Zip:</span>
                <input type="text" style={{ width: "27em", maxWidth: "70%" }}/>
              </label>
            </div>
          </div>
          <DialogActionsBar>
            <button className="k-button">Verify Address</button>
            <button className="k-button">Add</button>
            <button className="k-button k-primary">Cancel</button>
          </DialogActionsBar>
        </Dialog>}
      </div>
    );
  }
}

const stories = storiesOf('Dialog', module);
stories.addDecorator(withKnobs);
stories.addDecorator(checkA11y);

stories.add('Dialog - Keyboard Navigation', () =>
  <App />
);