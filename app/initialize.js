import { render } from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import App from 'components/app'
import reducer from 'components/reducer'
import {} from 'components/actions'
import { SLANGER_CONFIG } from 'components/config'
import thunk from 'redux-thunk'
import Pusher from 'pusher-js'
import { configurePusher } from 'pusher-redux'
import { ajax } from 'components/ajax'
import { parse  } from 'qs'


const params = parse(location.search, { ignoreQueryPrefix: true });
const initialState = {
  name: params['name'],
  quizz: 'default',
  players: [],
  buzzed: false,
  buzzes: [],
  results: []
};


const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const enhancer = compose(applyMiddleware(thunk), devtools || (function(app){ return app; }));
const store = createStore(reducer, initialState, enhancer);
configurePusher(store, 'buzzouce', SLANGER_CONFIG);

document.addEventListener('DOMContentLoaded', function() {
  render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('app')
  );
});
