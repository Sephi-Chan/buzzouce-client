import { JOIN_QUIZZ, BUZZ, PLAYER_BUZZED, ADMIN_RESETED, ADMIN_RESETED_ALL, RESET, RESET_ALL, ACCEPT, REJECT } from 'components/actions'
import { reject } from 'underscore'


const callbacks = {
  [JOIN_QUIZZ]: function(state, action) {
    return { ...state,
      name: action.name,
      quizz: action.quizz,
      players: [ ...state.players, action.name ]
    };
  },


  [BUZZ]: function(state, action) {
    return { ...state,
      buzzed: true
    };
  },


  [PLAYER_BUZZED]: function(state, { data }) {
    return { ...state,
      buzzes: [ { name: data.name, time: new Date }, ...state.buzzes ]
    };
  },


  [ADMIN_RESETED]: function(state, { data }) {
    if (state.name == data.name) {
      return { ...state,
        buzzed: false,
        buzzes: []
      };
    }
    else {
      return state;
    }
  },


  [ADMIN_RESETED_ALL]: function(state, { data }) {
    return { ...state,
      buzzed: false,
      buzzes: []
    };
  },


  [RESET]: function(state, action) {
    return { ...state,
      buzzes: reject(state.buzzes, function(buzz) { return buzz.name == action.name; })
    };
  },


  [RESET_ALL]: function(state, action) {
    return { ...state,
      buzzes: []
    };
  },


  [ACCEPT]: function(state, action) {
    return { ...state,
      results: [ ...state.results, { name: action.name, result: 'right' } ]
    };
  },

  [REJECT]: function(state, action) {
    return { ...state,
      results: [ ...state.results, { name: action.name, result: 'wrong' } ]
    };
  }
}


export default function(state, action) {
  return callbacks[action.type]
    ? callbacks[action.type](state, action)
    : state;
}
