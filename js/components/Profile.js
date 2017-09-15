import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Transation from './Transaction'
import SubProfile from './SubProfile'

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SubProfile />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
})

export default Profile
