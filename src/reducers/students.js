// import { FETCHED_BATCHES } from '../actions/batches/fetch'

import {
  STUDENT_CREATED,
  //RECIPE_UPDATED,
  //RECIPE_REMOVED
} from '../actions/recipes/subscribe'

const randomId = () => {
  return ['abcd', new Date().getTime()].join('')
}

export default (state = [], { type, payload } = {}) => {
  switch (type) {

    // case FETCHED_RECIPES :
    //   return [].concat(payload)

    case STUDENT_CREATED :
      let newId = randomId()
      while (state.map((r) => (r._id)).includes(newId)) { newId = randomId() }
      return [{ _id: newId, ...payload }].concat(state)

    // case RECIPE_UPDATED :
    //   return state.map((recipe) => {
    //     if (recipe._id === payload._id) return { ...recipe, ...payload }
    //     return recipe
    //   })

    // case RECIPE_REMOVED :
    //   return state.filter((recipe) => {
    //     return recipe._id !== payload._id
    //   })

    default :
      return state
  }
}
