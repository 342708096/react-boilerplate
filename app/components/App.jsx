import React from 'react';

import './App.scss';

export default () => (
  <div className="container">
    <form name="TGKCForm" noValidate className="col-lg-12" >
      <div className="card card-default">
        <div className="card-header">
          <h3 className="card-title">Targeted Group Key Cycling</h3>
        </div>
        <div className="card-text">
          <promise-loading promise-data="TGKCC.tgkc">
            <fieldset>
              <div className="form-group">
                <label htmlFor="TGKCEnabled">Enable TGKC </label>
                <input
                  type="checkbox" className="js-switch"
                  id="TGKCEnabled"
                />
              </div>
              <div>
                <div className="form-group">
                  <label htmlFor="tgkc-threshold">Percentage of reserved position in a group required TGKC</label>
                  <div className="input-group">
                    <input
                      id="tgkc-threshold" type="number"
                      className="form-control"
                      placeholder="1 - 100"
                      name="tgkc-threshold"
                      required
                      min="1"
                      max="100"
                    />
                    <span className="input-group-addon">%</span>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="tgkc-interval">Interval between two consecutive GKey cycles in days</label>
                  <div className="input-group">
                    <input
                      id="tgkc-interval" type="number"
                      className="form-control"
                      placeholder="1 - 180"
                      name="tgkc-interval"
                      required
                      min="1"
                      max="180"
                    />
                    <span className="input-group-addon">days</span>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="tgkc-max-group">Max. number of groups cycled per day</label>
                  <div className="input-group">
                    <input
                      id="tgkc-max-group" type="number"
                      className="form-control"
                      placeholder="1 - 100"
                      name="tgkc-max-group"
                      required
                      min="1"
                      max="100"
                    />
                    <span className="input-group-addon">groups</span>
                  </div>
                </div>
              </div>
            </fieldset>
          </promise-loading>
        </div>
        <div className="card-footer clearfix">
          <button type="button" className="btn btn-default pull-left" id="btn-go-portal">
            <i className="fa fa-caret-left" /> Back
          </button>
          <button id="save-tgkc" type="submit" className="btn btn-primary pull-right" >Save
            <i className="fa fa-floppy-o" />
          </button>
        </div>
      </div>
    </form>
  </div>
);

/*
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}
*/
