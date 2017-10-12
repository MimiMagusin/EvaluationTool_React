import API from '../../api'
import loading from '../loading/loading'
import loadError from '../loading/load-error'
import loadSuccess from '../loading/load-success'

export const FETCHED_STUDENTS = 'FETCHED_STUDENTS'

const api = new API()

export default () => {
  return (dispatch) => {
    dispatch(loading(true))

    const backend = api.service('students')
    backend.find()
      .then((result) => {
        dispatch(loadSuccess())
        dispatch(loading(false))
        dispatch({
          type: FETCHED_STUDENTS,
          payload: result.data
        })
      })
      .catch((error) => {
        dispatch(loading(false))
        dispatch(loadError(error))
      })
  }
}
