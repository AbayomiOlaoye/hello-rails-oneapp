import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  greeting: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GREETING':
      return { ...state, greeting: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
