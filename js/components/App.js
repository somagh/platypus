import { Image } from 'react-native'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import TransactionList from './TransactionList'
import Transaction from './Transaction'
import Profile from './Profile'
import PersonalTransactionList from './PersonalTransactionList'

import IC_PROF from '../images/ic_profile.png'
import IC_CREDIT from '../images/ic_credit.png'
import IC_REQ from '../images/ic_request.png'

const mapNavigationStateParamsToProps = SomeComponent => props => {
  const { navigation: { state: { params } } } = props
  return <SomeComponent {...params} {...props} />
}

const AppScreens = {
  TransactionList: { screen: mapNavigationStateParamsToProps(TransactionList) },
  Transaction: { screen: mapNavigationStateParamsToProps(Transaction) },
  Profile: { screen: mapNavigationStateParamsToProps(Profile) },
  Person: { screen: mapNavigationStateParamsToProps(PersonalTransactionList) },
}

const TabApp = TabNavigator(
  {
    profile: {
      screen: StackNavigator(AppScreens, {
        headerMode: 'none',
        initialRouteName: 'Profile',
      }),
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={IC_PROF}
            style={{ tintColor, width: 20, height: 20 }}
          />
        ),
      },
    },
    transList: {
      screen: StackNavigator(AppScreens, {
        headerMode: 'none',
        initialRouteName: 'TransactionList',
      }),
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={IC_CREDIT}
            style={{ tintColor, width: 20, height: 20 }}
          />
        ),
      },
    },
    person: {
      screen: StackNavigator(AppScreens, {
        headerMode: 'none',
        initialRouteName: 'Person',
      }),
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={IC_PROF}
            style={{ tintColor, width: 20, height: 20 }}
          />
        ),
      },
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
