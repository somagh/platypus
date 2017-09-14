import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native'
import { connect } from 'react-redux'
import Header from './Header'
import Transaction from './Transaction'

function keyExtractor(item, index) {
  return index
}

function renderItem({ item }) {
  return <Transaction {...item} />
}

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
        <FlatList
          style={styles.list}
          ListHeaderComponent={listHeader}
          data={this.props.transactions}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
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
    paddingVertical: 2,
    marginVertical: 15,
  },
  button: {
    backgroundColor: '#7899C5',
    paddingVertical: 5,
    paddingHorizontal: 8,
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
  list: {
    paddingHorizontal: 15,
  },
})

function mapStateToProps(state) {
  return {
    transactions: [
      { name: 'دنریس تارگرین', value: 200 },
      { name: 'نایت کینگ', value: -75 },
      { name: 'نایت کینگ', value: -75 },
      { name: 'دنریس تارگرین', value: 200 },
      { name: 'دنریس تارگرین', value: 200 },
      { name: 'نایت کینگ', value: -75 },
      { name: 'نایت کینگ', value: -75 },
      { name: 'دنریس تارگرین', value: 20000 },
      { name: 'دنریس تارگرین', value: 200 },
      { name: 'نایت کینگ', value: -75 },
      { name: 'نایت کینگ', value: -75 },
      { name: 'دنریس تارگرین', value: 200 },
      { name: 'دنریس تارگرین', value: 200 },
      { name: 'نایت کینگ', value: -75 },
      { name: 'نایت کینگ', value: -75 },
      { name: 'دنریس تارگرین', value: 200 },
    ],
  }
}
export default connect(mapStateToProps)(TransactionsList)
