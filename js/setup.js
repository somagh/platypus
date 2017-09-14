import { AppRegistry, Text } from 'react-native'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './components/App'
//import api from './api'

function setup() {
  class Root extends Component {
    constructor(props) {
      super(props)
      this.state = { store: null }
      configureStore()
        .then(store => {
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
          console.log('INJA')
          this.setState({ store })
        })
        .catch(err => {
          console.log('INJA ERROR', err)
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
