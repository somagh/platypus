import { AppRegistry, Text } from 'react-native'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './components/App'
import api from './api'
api.setToken(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5YmJiYTU0MzEwM2I2MGM3OWNkZTUxMCIsImlhdCI6MTUwNTQ3NTIxMX0.cuBMWszfZsS_AC1P62MWGgm7ULu_z9MQFXqZ9n7J0Uc',
)
function setup() {
  class Root extends Component {
    constructor(props) {
      super(props)
      this.state = { store: null }
      //console.log('SALAM INJA')
      configureStore().then(store => {
        // let token = null
        // console.log('token', store.getState().auth.token)
        // api.setToken(store.getState().auth.token)
        // store.subscribe(() => {
        //   const nextToken = store.getState().auth.token
        //   if (token !== nextToken) {
        //     token = nextToken
        //     api.setToken(token)
        //   }
        // })
        this.setState({ store })
      })
    }
    render() {
      return (
        this.state.store && (
          <Provider store={this.state.store}>
            <App />
          </Provider>
        )
      )
    }
  }
  return Root
}

AppRegistry.registerComponent('platypus', setup)
