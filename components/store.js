import { applyMiddleware, createStore } from 'redux'
import createThunkMiddleware from 'redux-thunk'

const initialState = [1, 2, 3]

const reducer = (state = initialState, action) => {
  switch (action) {
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(createThunkMiddleware()))

export default store
