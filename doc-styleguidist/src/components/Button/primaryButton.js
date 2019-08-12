import React from 'react';
import './primaryButton.css';


export default class PrimaryButton extends React.Component {
  render() {
    return (
      <div className="pd-onactive-parent pd-onhover-parent button">
          <div className="pd-onactive button-_active-4">
              <div className="button-0-0">
                  <div className="button-oval-5">
                      <div className="button-0-0-0-0">
                          <div className="button-_-1">{ this.props.text }</div>
                      </div>
                  </div>
              </div>
          </div>
          { (this.props.state === "default") ?
              <div className="button-default-5">
                  <div className="button-1-0-0">
                      <div className="button-oval-4">
                          <div className="button-1-0-0-0-0">
                              <div className="button-_-15">{ this.props.text }</div>
                          </div>
                      </div>
                  </div>
              </div>
          : null}
          <div className="pd-onhover button-_hover-8">
              <div className="button-2-0">
                  <div className="button-oval-3">
                      <div className="button-2-0-0-0">
                          <div className="button-_-8">{ this.props.text }</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
};
