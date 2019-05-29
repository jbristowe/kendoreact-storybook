import React from 'react';
import { storiesOf } from '@storybook/react';
import { Expand, Fade, Push, Slide, Zoom, Reveal } from '@progress/kendo-react-animation'
import props from './props';

class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          animationType: 'slide',
          show: false
      };
  }

  handleSelect = (event) => {
      this.setState({ animationType: event.target.value });
  }
  render() {
      const { show } = this.state;

      const children = show ? (
          <div
              className="content"
          >Content
          </div >) : null;

      let animation;

      switch (this.state.animationType) {
          case 'slide':
              animation = (<Slide>{children}</Slide>);
              break;
          case 'push':
              animation = (<Push>{children}</Push>);
              break;
          case 'expand':
              animation = (<Expand>{children}</Expand>);
              break;
          case 'fade':
              animation = (<Fade>{children}</Fade>);
              break;
          case 'zoom':
              animation = (<Zoom>{children}</Zoom>);
              break;
          case 'reveal':
              animation = (<Reveal>{children}</Reveal>);
              break;
          default: animation = (<Slide>{children}</Slide>); break;
      }

      return (
          <div className="example-wrapper row" {...props()}>
              <div className="col-xs-12 col-sm-6 example-col">
                  {animation}
              </div>
              <div className="col-xs-12 col-sm-6 example-config">
                  <input
                      onClick={this.handleSelect}
                      id="slide"
                      className="k-radio"
                      name="type"
                      type="radio"
                      value="slide"
                      defaultChecked={true}
                  />
                  <label htmlFor="slide" className="k-radio-label">
                      &nbsp;Slide
                  </label>
                  <br />
                  <input
                      onClick={this.handleSelect}
                      name="type"
                      id="push"
                      className="k-radio"
                      type="radio"
                      value="push"
                  />
                  <label htmlFor="push" className="k-radio-label">
                      &nbsp;Push
                  </label>
                  <br />
                  <input
                      onClick={this.handleSelect}
                      name="type"
                      id="expand"
                      className="k-radio"
                      type="radio"
                      value="expand"
                  />
                  <label htmlFor="expand" className="k-radio-label">
                      &nbsp;Expand
                  </label>
                  <br />
                  <input
                      onClick={this.handleSelect}
                      name="type"
                      id="fade"
                      className="k-radio"
                      type="radio"
                      value="fade"
                  />
                  <label htmlFor="fade" className="k-radio-label">
                      &nbsp;Fade
                  </label>
                  <br />
                  <input
                      onClick={this.handleSelect}
                      name="type"
                      id="zoom"
                      className="k-radio"
                      type="radio"
                      value="zoom"
                  />
                  <label htmlFor="zoom" className="k-radio-label">
                      &nbsp;Zoom
                  </label>
                  <br />
                  <input
                      onClick={this.handleSelect}
                      name="type"
                      id="reveal"
                      className="k-radio"
                      type="radio"
                      value="reveal"
                  />
                  <label htmlFor="reveal" className="k-radio-label">
                      &nbsp;Reveal
                  </label>
                  <br />
                  <button className="k-button" type="submit" onClick={() => this.setState({ show: !this.state.show })}>Animate</button>
              </div>
          </div>
      );
  }
}


storiesOf('Animation', module).add('Overview', () =>
  <App />
);