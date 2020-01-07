import { createStore, combineReducers } from 'redux'

const initialState = {
  count: 0
}

const ADD = 'ADD'

function countReducer(state = initialState, action) {
  console.log(state, action)
  switch (action.type) {
    case ADD:
      return { count: state.count + 1 }
    default:
      return state
  }
}
const allReducer = combineReducers({
  count: countReducer
})
const store = createStore(allReducer, {
  count: initialState
})

store.subscribe(() => {
  console.log(store.getState())
})
// store.dispatch({ type: ADD })
export default store