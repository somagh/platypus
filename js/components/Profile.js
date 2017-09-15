import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Transation from './Transaction'
import SubProfile from './SubProfile'
import PersonalTransaction from './PersonalTransaction'
import PersonalTransactionList from './PersonalTransactionList'

class Profile extends Component {
  render() {
    return <PersonalTransactionList />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //  padding: 15,
  },
})

export default Profile
