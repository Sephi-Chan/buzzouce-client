import React from 'react'
import { joinQuizz } from 'components/actions'
import { map, size } from 'underscore'
import { subscribe, unsubscribe } from 'pusher-redux';


export default class RoomPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quizz: 'default', name: props.name || '' };
    this.handleQuizzChange = this.handleQuizzChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
  }


  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }


  handleQuizzChange(event) {
    this.setState({ quizz: event.target.value });
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(joinQuizz(this.state.quizz, this.state.name));
  }


  subscribe() {
    subscribe('some-channel', 'some-event', 'LOLILOL');
  }

  unsubscribe() {
    unsubscribe('some-channel', 'some-event', 'LOLILOL');
  }

  componentWillMount() {
    this.subscribe();
  }


  componentWillUnmount() {
    this.unsubscribe();
  }


  render() {
    return (<div className="container">
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <div className="form-group hidden">
          <label htmlFor="quizz_name" className="col-sm-2 control-label">Quizz</label>
          <div className="col-sm-10">
           <input id="quizz_name" className="form-control" value={this.state.quizz} onChange={this.handleQuizzChange} />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="player_name" className="col-sm-2 control-label">Nom</label>
          <div className="col-sm-10">
           <input id="player_name" className="form-control" value={this.state.name} onChange={this.handleNameChange} />
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">Rejoindre le quizz !</button>
          </div>
        </div>
      </form>
    </div>);
  }
}
