import React, { Component, PropTypes } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native'
import Header from './Header'
import PersonalTransaction from './PersonalTransaction'
import { toFaDigit, commaSeparateNumber } from '../modules/utility'


function keyExtractor(item, index) {
  return index
}

function renderItem({ item }) {
  return <PersonalTransaction {...item} />
}

function renderSeparator() {
  return (
    <View style={{ backgroundColor: '#FFFFFF' }}>
      <View style={styles.line} />
    </View>
  )
}

class PersonalTransactionList extends Component {
  constructor(props) {
    super(props)
    this.listHeader = this.listHeader.bind(this)
  }
  listHeader() {
    return (
      <View style={styles.headerMain}>
        <Text style={styles.headerTitle}>{this.props.name}</Text>
        <View style={styles.headerContainer}>
          <View style={styles.headerButton}>
            <Text style={styles.headerText}>{`${toFaDigit(
              commaSeparateNumber(Math.abs(this.props.value).toString()),
            )} تومان`}</Text>
          </View>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.headerPayButton}>
              <Text style={styles.headerText}>{'پرداخت'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.main}>
        <Header />
        <FlatList
          style={styles.list}
          ListHeaderComponent={this.listHeader}
          data={this.props.personalTransactions}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerMain: {
    marginTop: 16,
  },
  headerTitle: {
    fontFamily: 'IRANSansWeb',
    fontSize: 18,
    color: '#4D5E75',
    textAlign: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'IRANSansWeb',
    textAlign: 'center',
  },
  headerPayButton: {
    backgroundColor: '#00DF85',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 10,
    top: 10,
    width: 100,
    height: 30,
    borderRadius: 8,
  },
  headerButton: {
    backgroundColor: '#4D5E75',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    top: -15,
    width: 150,
    height: 30,
    borderRadius: 8,
  },
  headerContainer: {
    backgroundColor: '#E9E9E9',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 60,
    marginTop: 32,
  },
  main: {
    flexDirection: 'column',
    backgroundColor: '#F7F7F7',
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
    fontFamily: 'IRANSansWeb',
  },
  title: {
    fontSize: 20,
    fontFamily: 'IRANSansWeb',
  },
  list: {
    marginHorizontal: 15,
    backgroundColor: '#F7F7F7',
    // borderRadius: 8,
    // borderRightWidth: 1,
    // borderLeftWidth: 1,
    // borderBottomWidth: 1,
    // borderColor: '#E3E3E3',
  },
  line: {
    height: 1,
    backgroundColor: '#E2E2E2',
    marginHorizontal: 20,
  },
})

PersonalTransactionList.propTypes = {
  personalTransactions: PropTypes.arrayOf(
    PropTypes.shape(PersonalTransaction.propTypes),
  ),
  name: PropTypes.string,
  value: PropTypes.number,
}

PersonalTransactionList.defaultProps = {
  personalTransactions: [
    { desc: 'علی', value: 421, date: 42342342 },
    { desc: 'سلام عمو', value: -421, date: 42342342 },
    { desc: 'سلام عمو', value: -421, date: 42342342 },
    { desc: 'سلام عمو', value: 421, date: 42342342 },
    { desc: 'سلام عمو', value: 421, date: 42342342 },
    { desc: 'سلام عمو', value: 421, date: 42342342 },
    { desc: 'سلام عمو', value: 421, date: 42342342 },
    { desc: 'سلام عمو', value: 421, date: 42342342 },
  ],
  name: 'استفان',
  value: 15000,
}

export default PersonalTransactionList
