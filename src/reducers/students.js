import { FETCHED_STUDENTS } from '../actions/students/fetch'

import {
  STUDENT_CREATED,
  STUDENT_UPDATED,
  STUDENT_REMOVED
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

    case STUDENT_UPDATED :
      return state.map((student) => {
        if (student._id === payload._id) return { ...student, ...payload }
        return student
      })

    case STUDENT_REMOVED :
      return state.filter((student) => {
        return student._id !== payload._id
      })

    default :
      return state
  }
}
