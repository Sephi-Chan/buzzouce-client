import React from 'react'
import { buzz, PLAYER_BUZZED, ADMIN_RESETED, ADMIN_RESETED_ALL } from 'components/actions'
import { subscribe, unsubscribe } from 'pusher-redux';


export default class Buzzer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
  }


  subscribe() {
    subscribe('buzzes', 'player-buzzed', PLAYER_BUZZED);
    subscribe('buzzes', 'admin-reseted', ADMIN_RESETED);
    subscribe('buzzes', 'admin-reseted-all', ADMIN_RESETED_ALL);
  }


  unsubscribe() {
    unsubscribe('buzzes', 'player-buzzed', PLAYER_BUZZED);
    unsubscribe('buzzes', 'admin-reseted', ADMIN_RESETED);
    unsubscribe('buzzes', 'admin-reseted-all', ADMIN_RESETED_ALL);
  }


  componentWillMount() {
    this.subscribe();
  }


  componentWillUnmount() {
    this.unsubscribe();
  }


  handleClick(event) {
    event.preventDefault();
    this.props.dispatch(buzz(this.props.name));
  }


  render() {
    return (<button className="btn-block btn btn-danger btn-lg buzz-button"
                    disabled={this.props.buzzed}
                    onClick={this.handleClick}>Buzz !!!</button>);
  }
}
