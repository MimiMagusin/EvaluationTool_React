export const LOADING_ERROR = 'LOADING_ERROR'


export default (error) => ({
  type: LOADING_ERROR,
  payload: error
})
