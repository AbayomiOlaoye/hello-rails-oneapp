import Axios from 'axios';

const FETCH_GREETING = 'hello-rails-oneapp/greetings/FETCH_GREETING';

// actions
const fetchGreeting = (payload) => ({
  type: FETCH_GREETING,
  payload,
});

// state
const initialState = [];

export const fetchGreetingApi = () => async (dispatch) => {
  const response = await Axios.get('/v2/greetings');
  console.log(response);
  const greeting = response.data.greeting
  dispatch(fetchGreeting(greeting));
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;