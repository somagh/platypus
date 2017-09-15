import api from '../api'

export const GET_USER = 'GET_USER'

export function getUser() {
  return dispatch =>
    api.getUser().then(user => dispatch({ type: GET_USER, payload: user }))
}
