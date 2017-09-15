import { AppRegistry, Text } from 'react-native'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './components/App'
import api from './api'
api.setToken(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5YmFlODBmNzVmNDcxNTVkMjA0MTk0NCIsImlhdCI6MTUwNTQ3MTk0Mn0.HgrDkLe3s1vJbfQH1ZBcMqfu5mMsgK06xupM2gsJAgU',
)
function setup() {
  class Root extends Component {
    constructor(props) {
      super(props)
      this.state = { store: null }

      setTimeout(() => {
        api.tap
          .getUser({})
          .then(user => {
            console.log(user)
          })
          .catch(err => console.log(err))
      }, 5000)
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
