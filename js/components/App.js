import { Image } from 'react-native'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import Profile from './Profile'
import EditProfile from './EditProfile'
import Feed from './Feed'
import Login from './Login'
import DialogList from './DialogList'
import Conversation from './Conversation'
import Emitter from '../modules/EventEmitter'
import PlayIcon from '../images/ic_tab_feed.png'
import ProfIcon from '../images/ic_tab_profile.png'

const mapNavigationStateParamsToProps = SomeComponent => props => {
  const { navigation: { state: { params } } } = props
  return <SomeComponent {...params} {...props} />
}

const AppScreens = {
  Profile: { screen: mapNavigationStateParamsToProps(Profile) },
}

const TabApp = TabNavigator(
  {
    prof: {
      screen: StackNavigator(AppScreens, {
        headerMode: 'none',
        initialRouteName: 'Profile',
      }),
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image source={ProfIcon} style={{ tintColor }} />
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

App.propTypes = {
  token: PropTypes.string,
}

function mapStateToProps(state) {
  return { token: state.auth.token }
}

export default connect(mapStateToProps)(App)
