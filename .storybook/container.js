import React, { Component } from 'react';
import './container.scss';

export default class Container extends Component {
  render() {
    const { story } = this.props;

    return (
      <React.StrictMode>
        <div role="main">
          {story()}
        </div>
      </React.StrictMode>
    );
  }
}