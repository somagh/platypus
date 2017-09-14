import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'

import IC_CHEVRON_DOWN from '../images/ic_chevron_down.png'
import IC_CHEVRON_UP from '../images/ic_chevron_up.png'

class Transaction extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 15,
        }}
      >
        <View style={styles.container}>
          <View style={styles.transContainer}>
            <View style={styles.nameContainer}>
              {this.props.value > 0 && (
                <Text style={styles.status}>{'(در انتظار پرداخت)'}</Text>
              )}
              {this.props.value < 0 && (
                <View style={styles.payButton}>
                  <Text style={styles.payButtonText}>{'پرداخت'}</Text>
                </View>
              )}
              <Text style={styles.name}>{this.props.name}</Text>
              <Image source={IC_CHEVRON_DOWN} style={styles.nameImage} />
            </View>
            <View style={styles.valueContainer}>
              <Text style={styles.valueText}>{`${Math.abs(
                this.props.value,
              )} پنی`}</Text>
              <Image source={IC_CHEVRON_DOWN} style={styles.nameImage} />
            </View>
            <View style={styles.moreInfo}>
              <Text style={styles.payButtonText}>{'اطلاعات بیشتر'}</Text>
            </View>
          </View>
          <View
            style={[
              styles.chervonContainer,
              { backgroundColor: this.props.value > 0 ? '#00DF84' : '#FF4C61' },
            ]}
          >
            <Image
              source={this.props.value > 0 ? IC_CHEVRON_DOWN : IC_CHEVRON_UP}
              style={styles.chervonButton}
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 8,
    paddingBottom: 8,
    backgroundColor: '#F7F7F7',
  },
  container: {
    flexDirection: 'row',
    borderRadius: 6,
    // borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#E3E3E3',
  },
  transContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'flex-end',
    padding: 4,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    borderColor: '#E3E3E3',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
  },
  nameContainer: {
    flexDirection: 'row',
  },
  nameImage: {
    width: 15,
    height: 15,
    tintColor: '#808C9C',
    marginLeft: 4,
  },
  status: {
    fontSize: 7,
    fontFamily: 'IRANSansWebNoEn-Medium',
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
  },
  name: {
    fontSize: 11,
    color: '#828D9B',
    flex: 1,
    textAlign: 'right',
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  valueText: {
    fontSize: 11,
    color: '#828D9B',
    flex: 1,
    textAlign: 'right',
  },
  moreInfo: {
    borderRadius: 3,
    backgroundColor: '#D1CCCC',
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  chervonContainer: {
    width: 17,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chervonButton: {
    width: 13,
    height: 13,
    tintColor: '#FFFFFF',
  },
})

Transaction.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

function mapStateToProps(state) {
  return {
    name: 'امیررضا',
    value: -29,
  }
}

export default connect(mapStateToProps)(Transaction)
