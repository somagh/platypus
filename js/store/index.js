import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { autoRehydrate, persistStore } from 'redux-persist'
import { AsyncStorage } from 'react-native'
import rootReducer from '../reducers'

const configureStore = () =>
  new Promise(resolve => {
    const store = createStore(
      rootReducer,
      undefined,
      compose(applyMiddleware(thunk), autoRehydrate()),
    )
    persistStore(
      store,
      {
        storage: AsyncStorage,
      },
      () => resolve(store),
    )
  })

export default configureStore
