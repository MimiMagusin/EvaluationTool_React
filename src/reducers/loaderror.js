import { LOADING_ERROR } from '../actions/loading/loaderror'
import { LOADING_SUCCESS } from '../actions/loading/loadsucces'

export default (state = "", { type, payload } = {}) => {
  switch(type) {
    case LOADING_ERROR :
     console.error(payload)
     return  payload.message
    case LOADING_SUCCESS :
      return null
    default :
      return state
  }
}
