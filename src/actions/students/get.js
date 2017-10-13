import API from '../../api'
import LOAD_ERROR from '../loading/load-error'
import LOAD_SUCCESS from '../loading/load-success'
import {
  APP_LOADING,
  APP_DONE_LOADING
} from '../loading/loading'

export const GET_STUDENT = 'GET_STUDENT'

const api = new API()

export default () => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

    const backend = api.service('students')

    api.authenticate()
      .then(() => {
        backend.get()
          .then((result) => {
            dispatch({ type: APP_DONE_LOADING })
            dispatch({ type: LOAD_SUCCESS })

            dispatch({
              type: GET_STUDENT,
              payload: result
            })
          })
          .catch((error) => {
            dispatch({ type: APP_DONE_LOADING })
            dispatch({
              type: LOAD_ERROR,
              payload: error.message
            })
          })
      })
      .catch((error) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}
