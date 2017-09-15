import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { toFaDigit, commaSeparateNumber } from '../modules/utility'
import UpIcon from '../images/ic_chevron_up.png'
import DownIcon from '../images/ic_chevron_down.png'

const BULLET_RADIUS = 12

const DebtAndDemand = ({ demand, debt }) => (
  <View style={styles.base}>
    <View style={[styles.bullet, styles.negativeIcon]}>
      <Image source={DownIcon} style={styles.icon} />
    </View>
    <Text style={[styles.coloryNumber, styles.negativeNumber]}>
      {toFaDigit(commaSeparateNumber(debt.toString()))}
    </Text>
    <View style={styles.hLine} />
    <Text style={[styles.coloryNumber, styles.positiveNumber]}>
      {toFaDigit(commaSeparateNumber(demand.toString()))}
    </Text>
    <View style={[styles.bullet, styles.positiveIcon]}>
      <Image source={UpIcon} style={styles.icon} />
    </View>
  </View>
)

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
  },
  bullet: {
    width: 2 * BULLET_RADIUS,
    height: 2 * BULLET_RADIUS,
    borderRadius: BULLET_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
  },
  negativeIcon: {
    backgroundColor: '#FF4D61',
  },
  positiveIcon: {
    backgroundColor: '#00DF84',
  },
  icon: {
    width: 18,
    height: 18,
    tintColor: '#FFFFFF',
  },
  coloryNumber: {
    fontSize: 16,
    fontFamily: 'IRANSansWeb',
    marginHorizontal: 2,
  },
  negativeNumber: {
    color: '#FF4D61',
  },
  positiveNumber: {
    color: '#00DF84',
  },
  hLine: {
    backgroundColor: '#DBDCDF',
    width: 2,
    height: 26,
    marginHorizontal: 4,
  },
})

function mapStateToProps(state) {
  return { demand: state.user.demand, debt: state.user.debt }
}

export default connect(mapStateToProps)(DebtAndDemand)
