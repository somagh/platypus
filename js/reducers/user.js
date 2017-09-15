import { GET_USER, GENERATE_ADDRESS } from '../actions/user'

export default function user(state = {}, action) {
  console.log(action)
  console.log(state)
  switch (action.type) {
    case GET_USER:
      return { ...state, ...action.payload }
    case GENERATE_ADDRESS:
      return { ...state, userCode: action.payload }
    default:
      return state
  }
}
