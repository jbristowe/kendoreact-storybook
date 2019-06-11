import React from 'react';
import { storiesOf } from '@storybook/react';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import props from './props';

let visible: Boolean = true;

function toggleDialog() {
  visible = !visible;
}

storiesOf('Dialogs/Dialog', module).add('Dimensions', () =>
  <>
    <button className="k-button" onClick={toggleDialog}>Open Dialog</button>
    {visible && <Dialog onClose={toggleDialog} {...props()}>
      <p style={{ margin: "25px", textAlign: "center" }}>Your escape pod is now ready.</p>
      <DialogActionsBar>
        <button className="k-button k-primary" onClick={toggleDialog}>Launch</button>
      </DialogActionsBar>
    </Dialog>}
  </>
);