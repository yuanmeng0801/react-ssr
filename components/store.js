import { applyMiddleware, createStore } from 'redux'
import createThunkMiddleware from 'redux-thunk'

const initialState = { arr: [1, 2, 3] }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'changeList':
      return { ...state, arr: action.payload }
    default:
      return state
  }
}

const getStore = () => {
  return createStore(reducer, applyMiddleware(createThunkMiddleware))
}

export default getStore
