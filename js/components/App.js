import { Image } from 'react-native'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import TransactionList from './TransactionList'
import Transaction from './Transaction'
import Profile from './Profile'

const mapNavigationStateParamsToProps = SomeComponent => props => {
  const { navigation: { state: { params } } } = props
  return <SomeComponent {...params} {...props} />
}

const AppScreens = {
  TransactionList: { screen: mapNavigationStateParamsToProps(TransactionList) },
  Transaction: { screen: mapNavigationStateParamsToProps(Transaction) },
  Profile: { screen: mapNavigationStateParamsToProps(Profile) },
}

const TabApp = TabNavigator(
  {
    prof: {
      screen: StackNavigator(AppScreens, {
        headerMode: 'none',
        initialRouteName: 'Profile',
      }),
      navigationOptions: {},
    },
    transList: {
      screen: StackNavigator(AppScreens, {
        headerMode: 'none',
        initialRouteName: 'TransactionList',
      }),
      navigationOptions: {},
    },
    moz: {
      screen: StackNavigator(AppScreens, {
        headerMode: 'none',
        initialRouteName: 'Transaction',
      }),
      navigationOptions: {},
    },
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    backBehavior: 'none',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
    },
  },
)

const App = ({ token }) => <TabApp onNavigationStateChange={null} />
//  token ? <TabApp onNavigationStateChange={stop} /> : <Login />

// App.propTypes = {
//   token: PropTypes.string,
// }

function mapStateToProps(state) {
  // return { token: state.auth.token }
  return {}
}

export default connect(mapStateToProps)(App)
