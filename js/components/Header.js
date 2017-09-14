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
import { toFaDigit, commaSeparateNumber } from '../modules/utility'
import UpIcon from '../images/ic_chevron_up.png'
import DownIcon from '../images/ic_chevron_down.png'

const extraHeight = 16 * (Platform.OS === 'ios')

const BULLET_RADIUS = 12

const Header = () => (
  <View style={styles.topIos}>
    <View style={styles.base}>
      <View style={[styles.bullet, styles.negativeIcon]}>
        <Image source={DownIcon} style={styles.icon} />
      </View>
      <Text style={[styles.coloryNumber, styles.negativeNumber]}>
        {toFaDigit(commaSeparateNumber('23213'))}
      </Text>
      <View style={styles.hLine} />
      <Text style={[styles.coloryNumber, styles.positiveNumber]}>
        {toFaDigit(commaSeparateNumber('23213'))}
      </Text>
      <View style={[styles.bullet, styles.positiveIcon]}>
        <Image source={UpIcon} style={styles.icon} />
      </View>
      <View style={styles.filler} />
      <TouchableOpacity style={styles.creditButton}>
        <Text style={styles.creditText}>
          + {toFaDigit(commaSeparateNumber('اعتبار 1000000 تومان'))}
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
    width: 3,
    height: 26,
    marginHorizontal: 4,
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

export default Header
