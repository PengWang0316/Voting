import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Button } from 'react-native-elements';

import Theme from '../Theme';
import SafeAreaScreen from './SafeAreaScreen';
import { logout as logoutAction } from '../actions/UserActions';

type Props = {
  user: Object,
  navigation: Object,
  logout: Function,
};

const Styles = StyleSheet.create({
  view: {
    marginBottom: 35,
  },
  btnView: {
    marginBottom: 10,
  },
  usernameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Theme.primary.main,
  },
  logoutBtn: {
    width: '100%',
    backgroundColor: Theme.dangerousColor,
  },
  closeBtn: {
    width: '100%',
    backgroundColor: Theme.primary.light,
  },
});

let propLogout;
let goBack;

/**
 * Calling the logout action to logout and goBack function to go back to the previous screen.
 * @return {null} No return.
 */
const handleLogoutBtnClick = () => {
  propLogout();
  goBack();
};

/**
 * Calling the goBack function to go back to the previous screen.
 * @return {null} No return.
 */
const handleCloseBtnClick = () => goBack();

/**
 * The component to show users picture and offerring a way to log out.
 * @param {Object} props contains props from its parent component and Redux action.
 * @return {jsx} Return jsx for the component.
 */
export const UserInfoScreen = ({ user, navigation, logout }: Props) => {
  propLogout = logout;
  goBack = navigation.goBack;
  return (
    <SafeAreaScreen>
      <View style={Styles.view}>
        <Avatar icon={{ type: 'font-awesome', name: 'user-secret' }} size={130} rounded />
      </View>
      <View style={Styles.view}>
        <Text style={Styles.usernameText}>{user.displayName}</Text>
      </View>
      <View style={Styles.btnView}>
        <Button buttonStyle={Styles.logoutBtn} title="LOGOUT" onPress={handleLogoutBtnClick} />
      </View>
      <View>
        <Button buttonStyle={Styles.closeBtn} title="CLOSE" onPress={handleCloseBtnClick} />
      </View>
    </SafeAreaScreen>
  );
};
/* istanbul ignore next */
const mapStateToProps = state => ({
  user: state.user,
});
/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAction()),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserInfoScreen);
