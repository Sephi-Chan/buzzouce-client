import React from 'react'
import { reset, resetAll, accept, reject, PLAYER_BUZZED } from 'components/actions'
import { subscribe, unsubscribe } from 'pusher-redux'
import { map, reduce } from 'underscore'
import SummaryTable from 'components/summary_table'


class BuzzRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleAcceptClick = this.handleAcceptClick.bind(this);
    this.handleRejectClick = this.handleRejectClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }


  handleAcceptClick(event) {
    this.props.dispatch(accept(this.props.name));
  }


  handleRejectClick(event) {
    this.props.dispatch(reject(this.props.name));
  }


  handleResetClick(event) {
    this.props.dispatch(reset(this.props.name));
  }


  render() {
    return (<tr>
      <td>{this.props.name}</td>
      <td>{this.props.time.toJSON()}</td>
      <td><button className="btn btn-success" onClick={this.handleAcceptClick}>Right</button></td>
      <td><button className="btn btn-danger" onClick={this.handleRejectClick}>Wrong</button></td>
      <td><button className="btn btn-warning" onClick={this.handleResetClick}>Reset</button></td>
    </tr>);
  }
}



export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.handleResetAllClick = this.handleResetAllClick.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
  }


  subscribe() {
    subscribe('buzzes', 'player-buzzed', PLAYER_BUZZED);
  }


  unsubscribe() {
    subscribe('buzzes', 'player-buzzed', PLAYER_BUZZED);
  }


  componentWillMount() {
    this.subscribe();
  }


  componentWillUnmount() {
    this.unsubscribe();
  }


  handleResetAllClick(event) {
    this.props.dispatch(resetAll());
  }


  render() {
    return (<div>
      <br />
      <table className="table table-bordered table-striped">
        <caption>Buzzes</caption>
        <thead>
          <tr>
            <th>Player</th>
            <th>Buzzed at</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {map(this.props.buzzes, (function(buzz) {
            return (<BuzzRow {...buzz} dispatch={this.props.dispatch} key={`${buzz.name} ${buzz.time.toJSON()}`} />);
          }).bind(this))}
        </tbody>
      </table>
      <button className="btn-block btn btn-warning btn-lg" onClick={this.handleResetAllClick}>Reset</button>

      <SummaryTable {...this.props} />
    </div>);
  }
}
