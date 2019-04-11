import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@progress/kendo-react-buttons';
import { props } from './props';

storiesOf('Buttons/Button', module).add('Overview', () =>
<div className="row example-wrapper">
<div className="col-xs-12 col-sm-6 example-col">
  <p>Default Buttons</p>
  <p>
    <Button >Browse</Button>
    <Button icon="folder">Browse</Button>
    <Button icon="folder"></Button>
  </p>
  <p>
    <Button disabled={true}>Browse</Button>
    <Button icon="folder" disabled={true}>Browse</Button>
    <Button icon="folder" disabled={true}></Button>
  </p>
</div>

<div className="col-xs-12 col-sm-6 example-col">
  <p>Primary Buttons</p>
  <p>
    <Button primary={true}>Browse</Button>
    <Button icon="folder" primary={true}>Browse</Button>
    <Button icon="folder" primary={true}></Button>
  </p>
  <p>
    <Button primary={true} disabled={true}>Browse</Button>
    <Button icon="folder" primary={true} disabled={true}>Browse</Button>
    <Button icon="folder" primary={true} disabled={true}></Button>
  </p>
</div>

<div className="col-xs-12 col-sm-6 example-col">
  <p>Bare Buttons</p>
  <p>
    <Button look="bare">Browse</Button>
    <Button icon="folder" look="bare">Browse</Button>
    <Button icon="folder" look="bare"></Button>
  </p>
  <p>
    <Button look="bare" disabled={true}>Browse</Button>
    <Button icon="folder" look="bare" disabled={true}>Browse</Button>
    <Button icon="folder" look="bare" disabled={true}></Button>
  </p>
</div>

<div className="col-xs-12 col-sm-6 example-col">
  <p>Primary Bare Buttons</p>
  <p>
    <Button primary={true} look="bare">Browse</Button>
    <Button icon="folder" primary={true} look="bare">Browse</Button>
    <Button icon="folder" primary={true} look="bare"></Button>
  </p>
  <p>
    <Button primary={true} look="bare" disabled={true}>Browse</Button>
    <Button icon="folder" primary={true} look="bare" disabled={true}>Browse</Button>
    <Button icon="folder" primary={true} look="bare" disabled={true}></Button>
  </p>
</div>

<div className="col-xs-12 col-sm-6 example-col">
  <p>Flat Buttons</p>
  <p>
    <Button look="flat">Browse</Button>
    <Button icon="folder" look="flat">Browse</Button>
    <Button icon="folder" look="flat"></Button>
  </p>
  <p>
    <Button look="flat" disabled={true}>Browse</Button>
    <Button icon="folder" look="flat" disabled={true}>Browse</Button>
    <Button icon="folder" look="flat" disabled={true}></Button>
  </p>
</div>

<div className="col-xs-12 col-sm-6 example-col">
  <p>Primary Flat Buttons</p>
  <p>
    <Button primary={true} look="flat">Browse</Button>
    <Button icon="folder" primary={true} look="flat">Browse</Button>
    <Button icon="folder" primary={true} look="flat"></Button>
  </p>
  <p>
    <Button primary={true} look="flat" disabled={true}>Browse</Button>
    <Button icon="folder" primary={true} look="flat" disabled={true}>Browse</Button>
    <Button icon="folder" primary={true} look="flat" disabled={true}></Button>
  </p>
</div>

<div className="col-xs-12 col-sm-6 example-col">
  <p>Outline Buttons</p>
  <p>
    <Button look="outline">Browse</Button>
    <Button icon="folder" look="outline">Browse</Button>
    <Button icon="folder" look="outline"></Button>
  </p>
  <p>
    <Button look="outline" disabled={true}>Browse</Button>
    <Button icon="folder" look="outline" disabled={true}>Browse</Button>
    <Button icon="folder" look="outline" disabled={true}></Button>
  </p>
</div>

<div className="col-xs-12 col-sm-6 example-col">
  <p>Primary Outline Buttons</p>
  <p>
    <Button primary={true} look="outline">Browse</Button>
    <Button icon="folder" primary={true} look="outline">Browse</Button>
    <Button icon="folder" primary={true} look="outline"></Button>
  </p>
  <p>
    <Button primary={true} look="outline" disabled={true}>Browse</Button>
    <Button icon="folder" primary={true} look="outline" disabled={true}>Browse</Button>
    <Button icon="folder" primary={true} look="outline" disabled={true}></Button>
  </p>
</div>

<div className="col-xs-12 example-col">
  <p>Icon Types</p>
  <Button icon="calendar">Kendo UI Font Icon</Button>
  <Button iconClass="fa fa-calendar fa-fw">Font Awesome Icon</Button>
  <Button imageUrl="https://demos.telerik.com/kendo-ui/content/shared/icons/sports/snowboarding.png">Image Icon</Button>
</div>
</div>
);