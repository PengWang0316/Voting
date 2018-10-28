import React from 'react';
import { View } from 'react-native';

import LoginForm from '../LoginForm';
import styles from './Styles';

type Props = { navigation: Object };

export const LoginPanel = ({ handleSnackbarUpdat, navigation }: Props) => (
  <View style={styles.internalContainer}>
    <LoginForm handleSnackbarUpdat={handleSnackbarUpdat} navigation={navigation} />
  </View>
);
export default LoginPanel;
