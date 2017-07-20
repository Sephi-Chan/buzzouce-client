import React from 'react'
import { connect } from 'react-redux'
import RoomPicker from 'components/room_picker'
import Admin from 'components/admin'
import Buzzer from 'components/buzzer'


function App(props) {
  if (props.name == 'admin' && props.quizz) {
    return (<div className="container">
      <Admin {...props} />
    </div>);
  }
  else if (props.name && props.quizz) {
    return (<div className="container">
      <br />
      <Buzzer {...props} />
    </div>);
  }
  else {
    return (<div>
      <div className="jumbotron">
        <div className="container">
          <h1>Buzzouce</h1>
          <p>Cet outil vous permet de savoir qui buzz en premier !</p>
        </div>
      </div>

      <RoomPicker {...props} />
    </div>);
  }
}


function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App)
