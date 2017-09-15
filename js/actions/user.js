import api from '../api'

export const GET_USER = 'GET_USER'
export const GENERATE_ADDRESS = 'GENERATE_ADDRESS'

export function getUser() {
  return dispatch =>
    api.tap
      .getUser({})
      .then(user => dispatch({ type: GET_USER, payload: user }))
      .catch(error => console.log(error))
}
export function generateAddress() {
  console.log('sag')
  return dispatch =>
    api.tap
      .generateAddress({})
      .then(address => dispatch({ type: GENERATE_ADDRESS, payload: address }))
      .catch(error => console.log(error))
}
