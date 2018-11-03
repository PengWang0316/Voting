import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import CacheableImage from 'react-native-cacheable-image';

import Styles from './Styles';
import { NO_PHOTO_URI } from '../../config';

const NAVIGATION_LOGIN_NAME = 'Login';
const NAVIGATION_LOGIN_INFO_NAME = 'UserInfo';

type Props = {
  navigation: Object,
  user: Object,
};

export const NavbarUserAvatar = ({ navigation, user }: Props) => (
  <View style={Styles.rootView}>
    {!user.id && <Icon type="font-awesome" name="user-circle" color="white" onPress={() => navigation.navigate(NAVIGATION_LOGIN_NAME)} />}
    {user.id && (
      <TouchableHighlight onPress={() => navigation.navigate(NAVIGATION_LOGIN_INFO_NAME)}>
        <CacheableImage
          style={Styles.avatarImage}
          source={{ uri: user.photo ? user.photo : NO_PHOTO_URI }}
        />
      </TouchableHighlight>
    )}
  </View>
);
/* istanbul ignore next */
const mapStateToProps = state => ({
  user: state.user,
});
export default connect(mapStateToProps, null)(NavbarUserAvatar);
