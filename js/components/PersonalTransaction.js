import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

import IC_CHEVRON_DOWN from '../images/ic_chevron_down.png'
import IC_CHEVRON_UP from '../images/ic_chevron_up.png'
import IC_PERSON from '../images/ic_person.png'

import moment from 'moment-jalaali'
import { toFaDigit, commaSeparateNumber } from '../modules/utility'
import IC_DOLLOR from '../images/ic_dollor.png'
import IC_CLOCK from '../images/ic_clock.png'
import IC_TAG from '../images/ic_tag.png'

class PersonalTransaction extends Component {
  render() {
    console.log('INJA INJA')
    moment.loadPersian({ dialect: 'persian-modern' })
    return (
      <View style={styles.container}>
        <View style={styles.transContainer}>
          <View style={styles.descContainer}>
            {this.props.value > 0 && (
              <Text style={styles.status}>{'(در انتظار پرداخت)'}</Text>
            )}
            {this.props.value < 0 && (
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.payButton}>
                  <Text style={styles.payButtonText}>{'پرداخت'}</Text>
                </View>
              </TouchableOpacity>
            )}
            <Text style={styles.desc}>{this.props.desc}</Text>
            <Image source={IC_TAG} style={styles.descImage} />
          </View>
          <View style={styles.valueContainer}>
            <Text style={styles.valueText}>{`${toFaDigit(
              commaSeparateNumber(Math.abs(this.props.value).toString()),
            )} پنی`}</Text>
            <Image source={IC_DOLLOR} style={styles.descImage} />
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>
              {`${toFaDigit(
                moment.unix(this.props.date / 1000).format('HH:mm'),
              )} |‌ ${toFaDigit(
                moment.unix(this.props.date / 1000).format('jDD jMMMM jYYYY'),
              )}`}
            </Text>
            <Image source={IC_CLOCK} style={styles.descImage} />
          </View>
        </View>
        <View
          style={[
            styles.chervonContainer,
            { backgroundColor: this.props.value > 0 ? '#00DF84' : '#FF4C61' },
          ]}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  mainContainer: {
    paddingHorizontal: 8,
    paddingBottom: 8,
    backgroundColor: '#F7F7F7',
  },
  container: {
    flexDirection: 'row',
    borderColor: '#E3E3E3',
    padding: 8,
    backgroundColor: '#FFFFFF',
  },
  transContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 4,
  },
  descContainer: {
    flexDirection: 'row',
  },
  descImage: {
    width: 15,
    height: 15,
    tintColor: '#808C9C',
    marginLeft: 4,
  },
  status: {
    fontSize: 7,
    fontFamily: 'IRANSansWeb',
    color: '#C6C8CB',
  },
  payButton: {
    paddingVertical: 3,
    paddingHorizontal: 12,
    backgroundColor: '#3A8FFF',
    borderRadius: 3,
  },
  payButtonText: {
    color: '#FFFFFF',
    fontSize: 8,
    fontFamily: 'IRANSansWeb',
  },
  desc: {
    fontSize: 11,
    color: '#828D9B',
    flex: 1,
    textAlign: 'right',
    fontFamily: 'IRANSansWeb',
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  valueText: {
    fontSize: 11,
    color: '#828D9B',
    flex: 1,
    textAlign: 'right',
    fontFamily: 'IRANSansWeb',
  },
  dateText: {
    fontSize: 11,
    color: '#828D9B',
    flex: 1,
    textAlign: 'right',
    fontFamily: 'IRANSansWeb',
  },
  moreInfo: {
    borderRadius: 3,
    backgroundColor: '#D1CCCC',
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  chervonContainer: {
    width: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  chervonButton: {
    width: 13,
    height: 13,
    tintColor: '#FFFFFF',
  },
})

PersonalTransaction.propTypes = {
  desc: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
}

export default PersonalTransaction
