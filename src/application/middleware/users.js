import { LOAD_USERS, loadUsersSuccess, loadUsersFailure, setUsers } from 'actions/users'
import * as uiActions from 'actions/ui'

const loadUsersFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
  next(action)
  if (action.type === LOAD_USERS) {
    try {
      dispatch(uiActions.setLoading(true))
      const users = await api.users.fetchAll()
      dispatch(loadUsersSuccess(users.data))
      dispatch(uiActions.setLoading(false))
    } catch (error) {
      dispatch(uiActions.setLoading(false))
      dispatch(loadUsersFailure(error.message))
    }
  }
}


export default [loadUsersFlow]