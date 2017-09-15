import React, { Component, PropTypes } from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  Clipboard,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native'
import BankButton from './BankButton'
import IC_CLIP from '../images/pasargad.png'
import IC_PASARGAD from '../images/pasargad.png'
import IC_MELLAT from '../images/mellat.png'

const WIDTH = Dimensions.get('window').width

const icons = {
  '057': IC_PASARGAD,
  '012': IC_MELLAT,
}

class SubProfile extends Component {
  constructor(props) {
    super(props)
    this.setClip = this.setClip.bind(this)
    this.state = {
      shabaInput: '',
      modalVisible: false,
    }
  }
  setClip() {
    Clipboard.setString(this.props.userCode)
  }
  renderBanks() {
    const shabaViews = this.props.shabaCodes.map((code, index) => {
      return <BankButton shabaCode={code} key={index} />
    })
    return shabaViews
  }
  render() {
    return (
      <View
        style={[
          styles.mainContainer,
          this.props.height > 0 ? { height: this.props.height } : {},
        ]}
      >
        <Modal
          animationType={'fade'}
          transparent
          onRequestClose={() => {}}
          visible={this.state.modalVisible}
        >
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.modal}>
              <View style={styles.modalContainer}>
                <View style={styles.modalHeader}>
                  <View style={styles.flexOne} />
                  <Text style={styles.headerText}>
                    {'اضافه کردن حساب بانکی'}
                  </Text>
                  <View style={styles.flexOne} />
                </View>
                <View style={styles.modalContent}>
                  <Text style={styles.shabaInputText}>{'شماره شبا'}</Text>
                  <View style={styles.shabaContainer}>
                    {this.state.shabaInput.length >= 8 && (
                      <Image
                        source={IC_PASARGAD}
                        style={styles.shabaInputImage}
                      />
                    )}
                    {!(this.state.shabaInput.length >= 8) && (
                      <View style={{ width: 16, height: 16, marginRight: 4 }} />
                    )}
                    <TextInput
                      style={[
                        styles.shabaInputText,
                        { width: 250, textAlign: 'left' },
                      ]}
                      value={this.state.shabaInput}
                      onChangeText={text => {
                        this.setState({ shabaInput: text })
                      }}
                      underlineColorAndroid="transparent"
                      autoFocus
                    />
                  </View>
                  <View style={styles.headerButton}>
                    <View style={styles.flexOne} />
                    <Text style={styles.headerButtonText}>
                      {'اضافه کردن حساب بانکی'}
                    </Text>
                    <View style={styles.flexOne} />
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <ScrollView
          contentContainerStyle={styles.container}
          removeClippedSubviews={false}
        >
          <View style={styles.button}>
            <TouchableOpacity
              onPress={this.setClip}
              style={styles.buttonTouch}
              disabled={!!this.props.userCode}
            >
              {!this.props.userCode && (
                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                  <View style={styles.flexOne} />
                  <Text style={styles.buttonText}> {'تولید کد کاربری'} </Text>
                  <View style={styles.flexOne} />
                </View>
              )}
              {this.props.userCode && (
                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingHorizontal: 12,
                  }}
                >
                  <TouchableOpacity onPress={() => {}}>
                    <Image source={IC_CLIP} style={styles.clipImage} />
                  </TouchableOpacity>
                  <View style={styles.flexOne} />
                  <Text style={styles.buttonText}>{this.props.userCode}</Text>
                  <View style={styles.flexOne} />
                  <Text style={styles.buttonText}>{'کد کاربری:'}</Text>
                </View>
              )}
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
            <TouchableOpacity
              onPress={() => {
                this.setState({ modalVisible: true })
              }}
              style={styles.buttonTouch}
            >
              <View style={styles.flexOne} />
              <Text style={styles.buttonText}> {'اضافه کردن حساب بانکی'} </Text>
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
  modalContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#E1E1E1',
    width: 320,
  },
  modalHeader: {
    backgroundColor: '#7898BD',
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginBottom: 8,
    flexDirection: 'row',
  },
  headerText: {
    fontFamily: 'IRANSansWeb',
    fontSize: 14,
    color: '#FFFFFF',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 8,
    width: 280,
  },
  shabaContainer: {
    marginVertical: 16,
    flexDirection: 'row',
  },
  shabaInputImage: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  shabaInputText: {
    fontFamily: 'IRANSansWeb',
    textAlign: 'center',
    fontSize: 10,
    color: '#4D5E75',
  },
  headerButton: {
    backgroundColor: '#3A8FFF',
    paddingVertical: 4,
    paddingHorizontal: 16,
    flexDirection: 'row',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#E1E1E1',
  },
  headerButtonText: {
    fontFamily: 'IRANSansWeb',
    textAlign: 'center',
    fontSize: 10,
    color: '#FFFFFF',
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clipImage: {
    width: 16,
    height: 16,
  },
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
    justifyContent: 'center',
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
  height: PropTypes.number,
}

SubProfile.defaultProps = {
  height: 0,
  userCode: 'jdfsk',
  shabaCodes: [
    'IR4605709287198DF',
    'IR46012039287198DF98D',
    'IR4605709287198DF',
    'IR4605709287198DF',
    'IR46012039287198DF98D',
    'IR4605709287198DF',
    'IR46012039287198DF98D',
    'IR46012039287198DF98D',
  ],
}

export default SubProfile
