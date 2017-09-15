import { GET_SECTIONS } from '../actions/transaction'

export default function user(state = { sections: [] }, action) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case GET_SECTIONS:
      return { ...state, sections: action.payload }
    default:
      return state
  }
}
