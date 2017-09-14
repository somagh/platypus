import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native'
import Header from './Header'

const listHeader = () => (
  <View style={styles.listHeader}>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>ساخت صورت حساب</Text>
    </TouchableOpacity>
    <View style={styles.filler} />
    <Text style={styles.title}>لیست صورت حساب ها</Text>
  </View>
)

class TransactionsList extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Header />
        <FlatList ListHeaderComponent={listHeader} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    flex: 1,
  },
  filler: {
    flex: 1,
  },
  listHeader: {
    flexDirection: 'row',
    height: 26,
    marginHorizontal: 16,
    marginVertical: 15,
  },
  button: {
    backgroundColor: '#7899C5',
    width: 120,
    height: 22,
    borderRadius: 2,
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  title: {
    fontSize: 20,
  },
})

export default TransactionsList
