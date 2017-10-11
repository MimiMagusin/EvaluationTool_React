//import { SEED_BATCHES } from '../actions/batches/seed'
import { FETCHED_BATCHES } from '../actions/batches/fetch'

import {
  BATCH_CREATED,
  BATCH_UPDATED,
  BATCH_REMOVED
} from '../actions/batches/subscribe'

const randomId = () => {
  return ['abcd', new Date().getTime()].join('')
}

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    //case SEED_BATCHES :
    //  return state.concat(payload)

    case FETCHED_BATCHES :
      return [].concat(payload)

    // case BATCH_CREATED :
    //   let newId = randomId()
    //   while (state.map((r) => (r._id)).includes(newId)) { newId = randomId() }
    //   return [{ _id: newId, ...payload }].concat(state)
    //
    // case BATCH_UPDATED :
    //   return state.map((batch) => {
    //     if (batch._id === payload._id) return { ...batch, ...payload }
    //     return batch
    //   })

    //case BATCH_REMOVED :
      //return state.filter((batch) => {
        //return batch._id !== payload._id
    //  })
    }
