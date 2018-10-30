/**
 * @format
 * @flow
 */
import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Theme from './Theme';
import NavbarUserAvatar from './components/NavbarUserAvatar';

// Top Screens
import MainScreen from './screens/MainScreen';
import CandidateDetailScreen from './screens/CandidateDetailScreen';

// Modal screens
import LoginScreen from './screens/LoginScreen';
import UserInfoScreen from './screens/UserInfoScreen';

const navigationOptions = ({ navigation }) => (
  {
    headerStyle: {
      backgroundColor: Theme.primary.main,
    },
    headerTintColor: Theme.primary.contrastText,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitle: 'Voting Now',
    headerRight: <NavbarUserAvatar navigation={navigation} />,
  }
);

const MainStack = createStackNavigator(
  {
    Main: { screen: MainScreen },
    Login: { screen: LoginScreen },
    UserInfo: { screen: UserInfoScreen },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const CandidateDetailStack = createStackNavigator(
  {
    CandidateDetail: { screen: CandidateDetailScreen },
    Login: { screen: LoginScreen },
    UserInfo: { screen: UserInfoScreen },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const RootStack = createStackNavigator(
  {
    Main: { screen: MainStack },
    CandidateDetail: { screen: CandidateDetailStack },
  },
  { navigationOptions },
);

export const App = () => <RootStack />;
export default App;
