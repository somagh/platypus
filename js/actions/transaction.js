import api from '../api'

export const GET_SECTIONS = 'GET_SECTIONS'

export function getSections() {
  return dispatch =>
    api.tap
      .getSections({})
      .then(response => {
        dispatch({ type: GET_SECTIONS, payload: response.sections })
      })
      .catch(error => console.log(error))
}
