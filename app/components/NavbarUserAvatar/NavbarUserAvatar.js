import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Icon, Avatar } from 'react-native-elements';

import Styles from './Styles';

const NAVIGATION_LOGIN_NAME = 'Login';
const NAVIGATION_LOGIN_INFO_NAME = 'UserInfo';

type Props = {
  navigation: Object,
  user: Object,
};

export const NavbarUserAvatar = ({ navigation, user }: Props) => (
  <View style={Styles.rootView}>
    {!user._id && <Icon type="font-awesome" name="user-circle" color="white" onPress={() => navigation.navigate(NAVIGATION_LOGIN_NAME)} />}
    {user._id && <Avatar size={35} rounded icon={{ type: 'font-awesome', name: 'user-secret' }} onPress={() => navigation.navigate(NAVIGATION_LOGIN_INFO_NAME)} />}
  </View>
);
/* istanbul ignore next */
const mapStateToProps = state => ({
  user: state.user,
});
export default connect(mapStateToProps, null)(NavbarUserAvatar);
