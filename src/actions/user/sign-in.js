import API from '../../api'
import loading from '../loading/loading'
import loadError from '../loading/load-error'
import loadSuccess from '../loading/load-success'
import { history } from '../../store'

export const USER_SIGNED_IN = 'USER_SIGNED_IN'

const api = new API()

export default (user) => {
  return (dispatch) => {
    dispatch(loading(true))

    api.authenticate(user)
      .then((result) => {
        dispatch(loadSuccess())
        dispatch(loading(false))
        dispatch({
          type: USER_SIGNED_IN,
          payload: result
        })
        history.push('/')
      })
      .catch((error) => {
        debugger;
        dispatch(loading(false))
        dispatch(loadError(error))
      })
  }
}
