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
  TextInput,
} from 'react-native'
import { connect } from 'react-redux'
import DebtAndDemand from './DebtAndDemand'
import { toFaDigit, commaSeparateNumber } from '../modules/utility'
import UpArrowIcon from '../images/ic_arrow_up.png'
import DownArrowIcon from '../images/ic_arrow_down.png'
import PencilIcon from '../images/ic_pencil.png'
import CancelIcon from '../images/ic_times.png'
import CheckIcon from '../images/ic_check.png'

const extraHeight = 16 * (Platform.OS === 'ios')

class Train extends Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.header}>
          {!this.state.editing && (
            <View style={styles.nameView}>
              <Text style={styles.name}>{this.props.name}</Text>
              <TouchableOpacity onPress={this.toEdit}>
                <Image source={PencilIcon} style={styles.nameIcon} />
              </TouchableOpacity>
            </View>
          )}
          {this.state.editing && (
            <View style={styles.nameView}>
              <TouchableOpacity onPress={this.endEdit} style={styles.editIcon}>
                <Image source={CheckIcon} style={styles.nameIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.endEdit} style={styles.editIcon}>
                <Image source={CancelIcon} style={styles.nameIcon} />
              </TouchableOpacity>
              <TextInput
                style={styles.nameInput}
                value={this.state.value}
                underlineColorAndroid="transparent"
                onChangeText={this.onInputChange}
              />
            </View>
          )}
          <View style={styles.buttonBox}>
            <View style={styles.creditBox}>
              <Text style={styles.creditText}>
                {`اعتبار ${toFaDigit(
                  commaSeparateNumber(this.props.credit.toString()),
                )} تومان`}
              </Text>
            </View>
            <View style={styles.borderVertical} />
            <View style={styles.subButtonBox}>
              <TouchableOpacity style={styles.leftButton}>
                <Text style={styles.buttonText}>دریافت اعتبار</Text>
                <Image source={DownArrowIcon} style={styles.arrowIcon} />
              </TouchableOpacity>
              <View style={styles.borderHorizontal} />
              <TouchableOpacity style={styles.rightButton}>
                <Text style={styles.buttonText}>افزایش اعتبار</Text>
                <Image source={UpArrowIcon} style={styles.arrowIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <DebtAndDemand />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
  },
  header: {
    paddingTop: extraHeight,
    flexDirection: 'column',
    justifyContent: 'center',
    borderBottomWidth: 2,
    backgroundColor: '#E9E6FF',
    paddingBottom: 8,
    borderColor: '#DBDCDF',
    alignItems: 'center',
  },
  nameView: { flexDirection: 'row', marginBottom: 5, marginTop: 10 },
  name: {
    fontFamily: 'IRANSansWeb',
    fontSize: 15,
    textAlign: 'center',
  },
  nameInput: {
    fontFamily: 'IRANSansWeb',
    fontSize: 15,
    textAlign: 'center',
    width: 100,
  },
  nameIcon: { width: 15, height: 15, tintColor: '#9A9A9A', marginLeft: 3 },
  editIcon: { alignSelf: 'flex-end', marginBottom: 13 },
  buttonBox: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  paddingHorizontal: 5,
  borderBottomWidth: 5,
  creditBox: {
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    backgroundColor: '#2A93FF',
    paddingVertical: 7,
    borderColor: '#E9E6FF',
  },
  creditText: {
    fontFamily: 'IRANSansWeb',
    fontSize: 18,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  borderHorizontal: {
    width: 1,
  },
  subButtonBox: {
    flexDirection: 'row',
  },
  leftButton: {
    borderBottomLeftRadius: 6,
    backgroundColor: '#00DF84',
    flexDirection: 'row',
    paddingVertical: 4,
  },
  borderVertical: {
    height: 1,
  },
  rightButton: {
    borderBottomRightRadius: 6,
    flexDirection: 'row',
    backgroundColor: '#00DF84',
    paddingVertical: 4,
  },
  arrowIcon: { width: 15, height: 15, tintColor: '#FFFFFF', marginRight: 5 },
  buttonText: {
    fontFamily: 'IRANSansWeb',
    fontSize: 13,
    textAlign: 'center',
    color: '#FFFFFF',
    paddingHorizontal: 10,
  },
})

export default Train
