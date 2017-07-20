import { ajax } from 'components/ajax';

export const JOIN_QUIZZ = 'JOIN_QUIZZ';
export const BUZZ = 'BUZZ';
export const ADMIN_RESETED = 'ADMIN_RESETED';
export const ADMIN_RESETED_ALL = 'ADMIN_RESETED_ALL';
export const PLAYER_BUZZED = 'PLAYER_BUZZED';
export const RESET = 'RESET';
export const RESET_ALL = 'RESET_ALL';
export const ACCEPT = 'ACCEPT';
export const REJECT = 'REJECT';


export function joinQuizz(quizz, name) {
  return { type: JOIN_QUIZZ, quizz, name };
}


export function buzz(name) {
  return function(dispatch) {
    dispatch({ type: BUZZ, name });
    ajax.post('/buzz', { name });
  }
}


export function reset(name) {
  ajax.post('/reset', { name });
  return { type: RESET, name };
}


export function resetAll() {
  ajax.post('/reset_all');
  return { type: RESET_ALL };
}


export function accept(name) {
  ajax.post('/right', { name });
  return { type: ACCEPT, name }
}


export function reject(name) {
  ajax.post('/wrong', { name });
  return { type: REJECT, name }

}
