export const LOAD_USERS = '[users] load'
export const LOAD_USERS_SUCCESS = '[users] load success'
export const LOAD_USERS_FAILURE = '[users] load failure'
export const SET_USERS = '[users] set'
export const PUT_USER = '[users] put'

export const loadUsers = { type: LOAD_USERS }

export const loadUsersSuccess = users => ({ type: LOAD_USERS_SUCCESS, payload: users })

export const loadUsersFailure = error => ({ type: LOAD_USERS_FAILURE, payload: error })

export const setUsers = users => ({ type: SET_USERS, payload: users })

export const putUser = user => ({ type: PUT_USER, payload: user })