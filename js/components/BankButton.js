import React, { Component, PropTypes } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import IC_PASARGAD from '../images/pasargad.png'
import IC_MELLAT from '../images/mellat.png'
import IC_TIMES from '../images/ic-times.png'

const icons = {}

class BankButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={IC_PASARGAD} style={styles.image} />
        <Text style={styles.text}>{this.props.shabaCode}</Text>
        <View style={styles.flexOne} />
        <Image
          source={IC_TIMES}
          style={[styles.image, { tintColor: '#D9D9D9' }]}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  container: {
    marginTop: 10,
    backgroundColor: '#F9F9F9',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#E1E1E1',
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 15,
    height: 15,
  },
  text: {
    color: '#807A7A',
    fontSize: 10,
    fontFamily: 'IRANSansWeb',
    marginLeft: 10,
  },
})

BankButton.propTypes = {
  shabaCode: PropTypes.string.isRequired,
}

export default BankButton
