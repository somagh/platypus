import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native'
import { connect } from 'react-redux'
import DebtAndDemand from './DebtAndDemand'
import { toFaDigit, commaSeparateNumber } from '../modules/utility'

const extraHeight = 16 * (Platform.OS === 'ios')

const Header = ({ credit }) => (
  <View style={styles.topIos}>
    <View style={styles.base}>
      <DebtAndDemand />
      <View style={styles.filler} />
      <TouchableOpacity style={styles.creditButton}>
        <Text style={styles.creditText}>
          {toFaDigit(commaSeparateNumber(`اعتبار ${credit} تومان`))}
        </Text>
      </TouchableOpacity>
    </View>
  </View>
)

const styles = StyleSheet.create({
  topIos: {
    backgroundColor: '#E9E6FF',
  },
  base: {
    marginTop: extraHeight,
    height: 45,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#DBDCDF',
  },
  filler: {
    flex: 1,
  },
  creditButton: {
    backgroundColor: '#2A93FF',
    paddingVertical: 4,
    paddingHorizontal: 7,
    borderRadius: 3,
  },
  creditText: {
    fontFamily: 'IRANSansWeb',
    fontSize: 14,
    textAlign: 'center',
    color: '#FFFFFF',
  },
})

function mapStateToProps(state) {
  return { credit: state.user.credit }
}

export default connect(mapStateToProps)(Header)
