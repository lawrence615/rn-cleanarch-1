import { PAGE_LOADED } from 'actions/ui'
import * as usersActions from 'actions/users'

const pageLoadedFlow = () => ({ dispatch }) => next => action => {
  next(action)

  if (action.type === PAGE_LOADED) {
    console.log('check 1')
    dispatch(usersActions.loadUsers)
  }
}

export default [pageLoadedFlow]