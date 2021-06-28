import * as React from 'react'
import { Provider } from 'react-redux'

import {configureStore} from './application/store'
import services from './infrastructure'
import App from 'views/users'

const Main = () => {
  return (
    <Provider store={configureStore(services)}>
      <App />
    </Provider>
  )
}

export default Main