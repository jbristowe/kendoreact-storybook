import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, ButtonGroup } from '@progress/kendo-react-buttons';

storiesOf('Buttons/ButtonGroup', module).add('Overview', () =>
<div className="row">
                 <div className="col-xs-12 col-sm-6 example-col">
                   <p>Text only</p>
                   <ButtonGroup>
                     <Button togglable={true}>
                       Bold
                     </Button>
                     <Button togglable={true}>
                       Italic
                     </Button>
                     <Button togglable={true}>
                       Underline
                     </Button>
                   </ButtonGroup >
                 </div>
                 <div className="col-xs-12 col-sm-6 example-col">
                   <p>Icons only</p>
                   <ButtonGroup >
                       <Button togglable={true} icon="bold"></Button>
                       <Button togglable={true} icon="italic"></Button>
                       <Button togglable={true} icon="underline"></Button>
                   </ButtonGroup >
                 </div>
                 <div className="col-xs-12 col-sm-6 example-col">
                   <p>Text + Icons</p>
                   <ButtonGroup >
                       <Button togglable={true} icon="bold">Bold</Button>
                       <Button togglable={true} icon="italic">Italic</Button>
                       <Button togglable={true} icon="underline">Underline</Button>
                   </ButtonGroup >
                 </div>
                 <div className="col-xs-12 col-sm-6 example-col">
                   <p>Buttons with responsive width</p>
                   <ButtonGroup width="300px">
                       <Button togglable={true} icon="bold">Bold</Button>
                       <Button togglable={true} icon="italic">Italic</Button>
                       <Button togglable={true} icon="underline">Underline</Button>
                   </ButtonGroup >
                 </div>
               </div>
);