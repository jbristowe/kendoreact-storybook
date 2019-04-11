import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';

function outputOption(name, title, isPrimary) {
  if (isPrimary) return (
    <button className="k-button k-primary">{text(name + ' Text', title, name)}</button>
  )
  return (
    <button className="k-button">{text(name + ' Text', title, name)}</button>
  )
}

storiesOf('Dialogs/Dialog', module).add('Overview', () => {
  const content = text('content', 'Do you wish to continue?', 'Miscellaneous');

  const props = () => ({
    // appearance knobs
    closeIcon: boolean('closeIcon', true, 'Appearance'),
    dir: select('dir', [ 'ltr', 'rtl', 'auto' ], 'ltr', 'Appearance'),
    height: text('height', undefined, 'Appearance'),
    midWidth: text('midWidth', undefined, 'Appearance'),
    title: text('title', 'Question', 'Appearance'),
    width: text('width', undefined, 'Appearance'),

    // event actions
    onClose: action('close'),

    // miscellaneous knobs
    id: text('id', undefined, 'Miscellaneous')
  });

  return (
    <Dialog {...props()}>
      <p>{content}</p>
      <DialogActionsBar>
        {outputOption('Option 1', 'No', boolean('isOption1Primary', false, 'Option 1'))}
        {outputOption('Option 2', 'Yes', boolean('isOption2Primary', false, 'Option 2'))}
      </DialogActionsBar>
    </Dialog>
  )
});