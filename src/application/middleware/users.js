import { LOAD_USERS, loadUsersSuccess, loadUsersFailure, setUsers } from 'actions/users'
import * as uiActions from 'actions/ui'

const loadUsersFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
  next(action)
  console.log('check 2')
  if (action.type === LOAD_USERS) {
    console.log('check 3')
    try {
      console.log('check 4')
      dispatch(uiActions.setLoading(true))
      const users = await api.users.fetchAll()
      dispatch(loadUsersSuccess(users.data))
      dispatch(uiActions.setLoading(false))
    } catch (error) {
      console.log('check 5', error)
      dispatch(loadUsersFailure(error))
    }
  }
}


export default [loadUsersFlow]