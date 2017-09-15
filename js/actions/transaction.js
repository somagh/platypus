import api from '../api'

export const GET_SECTIONS = 'GET_SECTIONS'

export function getSections() {
  console.log('gav')
  return dispatch =>
    api.tap
      .getSections({})
      .then(response => {
        console.log(response, 'asad')
        dispatch({ type: GET_SECTIONS, payload: response.sections })
      })
      .catch(error => console.log(error))
}
