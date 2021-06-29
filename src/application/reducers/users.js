import { LOAD_USERS_SUCCESS, LOAD_USERS_FAILURE, SET_USERS } from 'actions/users'

const initialState = {
  allUsers: [],
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS_SUCCESS:
      return { allUsers: action.payload, error: null };
    case LOAD_USERS_FAILURE:
      return { allUsers: [], error: action.payload };
    case SET_USERS:
      return { allUsers: action.payload, error: null };
    default:
      return state;
  }
}

export default reducer;