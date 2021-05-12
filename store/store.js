import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk"; // 使用ReduxThunk支持异步的dispatch

const initialState = {
  count: 0
};

const ADD = "ADD";

function countReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return { count: state.count + (action.num || 1) };
    default:
      return state;
  }
}

const allReducer = combineReducers({
  count: countReducer
});
const store = createStore(
  allReducer,
  {
    count: initialState
  },
  applyMiddleware(ReduxThunk)
);

store.subscribe(() => {
  console.log(store.getState());
});

// action creator
function add(num) {
  return {
    type: ADD,
    num
  };
}
// 异步action
function addAsync(num) {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(add(num));
    }, 500);
  };
}

store.dispatch(add(3)); // +3
store.dispatch(addAsync(5)); // +5

export default store;
