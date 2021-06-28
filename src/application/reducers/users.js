import { LOAD_USERS_SUCCESS, SET_USERS } from 'actions/users'

const initialState = {
  allUsers: [],
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS_SUCCESS:
      console.info(action.payload)
      return { allUsers: action.payload, error: null };
    case SET_USERS:
      return { allUsers: action.payload, error: null };
    default:
      return state;
  }
}

export default reducer;