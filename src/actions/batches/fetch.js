import API from '../../api'
import loading from '../loading/loading'
import loadError from '../loading/load-error'
import loadSuccess from '../loading/load-success'

export const FETCHED_BATCHES = 'FETCHED_BATCHES'

const api = new API()

export default () => {
  return (dispatch) => {
    dispatch(loading(true))

    const backend = api.service('batches')
    backend.find({
      query: {
        $limit: 50,
        $sort: {
          createdAt: -1
        }
      }
    })
      .then((result) => {
        dispatch(loadSuccess())
        dispatch(loading(false))
        dispatch({
          type: FETCHED_BATCHES,
          payload: result.data
        })
      })
      .catch((error) => {
        dispatch(loading(false))
        dispatch(loadError(error))
      })
  }
}
