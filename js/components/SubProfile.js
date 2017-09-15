import React, { Component, PropTypes } from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import BankButton from './BankButton'

const WIDTH = Dimensions.get('window').width

class SubProfile extends Component {
  renderBanks() {
    const shabaViews = this.props.shabaCodes.map((code, index) => {
      return <BankButton shabaCode={code} key={index} />
    })
    return shabaViews
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView contentContainerStyle={styles.container} horizontal={false}>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => {}} style={styles.buttonTouch}>
              <View style={styles.flexOne} />
              {!this.props.userCode && (
                <Text style={styles.buttonText}> {'تولید کد کاربری'} </Text>
              )}
              <View style={styles.flexOne} />
            </TouchableOpacity>
          </View>
          <Text style={styles.hintText}>
            {
              '* کاربران دیگر توسط کد کاربری شما میتوانند برای شما صورت حساب صادر نمایند یا شما را در لیست کاربران خود داشته باشند'
            }
          </Text>
          <View style={styles.line} />
          <Text style={styles.bankTitle}>{'حساب‌های بانکی'}</Text>

          <View style={styles.button}>
            <TouchableOpacity onPress={() => {}} style={styles.buttonTouch}>
              <View style={styles.flexOne} />
              {!this.props.userCode && (
                <Text style={styles.buttonText}>
                  {' '}
                  {'اضافه کردن حساب بانکی'}{' '}
                </Text>
              )}
              <View style={styles.flexOne} />
            </TouchableOpacity>
          </View>

          <View style={styles.bankButtons}>{this.renderBanks()}</View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bankButtons: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTouch: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  flexOne: {
    flex: 1,
  },
  bankTitle: {
    color: '#BABABA',
    fontFamily: 'IRANSansWeb',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
  },
  mainContainer: {
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 15,
    paddingTop: 15,
    alignItems: 'center',
    width: WIDTH,
  },
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    padding: 10,
    borderWidth: 1,
    borderColor: '#DBDBDB',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3A8FFF',
    alignItems: 'center',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#E1E1E1',
    flexDirection: 'row',
  },
  buttonText: {
    fontFamily: 'IRANSansWeb',
    fontSize: 12,
    color: '#FFFFFF',
  },
  hintText: {
    fontFamily: 'IRANSansWeb',
    fontSize: 10,
    color: '#BABABA',
    textAlign: 'right',
    marginVertical: 10,
  },
  line: {
    backgroundColor: '#D2D2D2',
    width: WIDTH - 60,
    height: StyleSheet.hairlineWidth,
  },
})

SubProfile.propTypes = {
  userCode: PropTypes.string,
  shabaCodes: PropTypes.arrayOf(PropTypes.string),
}

SubProfile.defaultProps = {
  userCode: null,
  shabaCodes: [
    'IR4605709287198DF',
    'IR46012039287198DF98D',
    'IR4605709287198DF',
    'IR46012039287198DF98D',
    'IR4605709287198DF',
    'IR46012039287198DF98D',
    'IR4605709287198DF',
    'IR4605709287198DF',
    'IR46012039287198DF98D',
    'IR46012039287198DF98D',
  ],
}

export default SubProfile