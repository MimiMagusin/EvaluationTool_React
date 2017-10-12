import { FETCHED_STUDENTS } from '../actions/students/fetch'

import {
  STUDENT_CREATED,
  //RECIPE_UPDATED,
  //RECIPE_REMOVED
} from '../actions/students/subscribe'

const randomId = () => {
  return ['abcd', new Date().getTime()].join('')
}

export default (state = [], { type, payload } = {}) => {
  switch (type) {

     case FETCHED_STUDENTS :
       return [].concat(payload)

    case STUDENT_CREATED :
      let newId = randomId()
      while (state.map((r) => (r._id)).includes(newId)) { newId = randomId() }
      return [{ _id: newId, ...payload }].concat(state)

    // case STUDENT_UPDATED :
    //   return state.map((recipe) => {
    //     if (recipe._id === payload._id) return { ...recipe, ...payload }
    //     return recipe
    //   })

    // case STUDENT_REMOVED :
    //   return state.filter((recipe) => {
    //     return recipe._id !== payload._id
    //   })

    default :
      return state
  }
}
