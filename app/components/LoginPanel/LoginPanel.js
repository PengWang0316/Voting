import React from 'react';
import { View } from 'react-native';

import LoginForm from '../LoginForm';
import styles from './Styles';

type Props = {
  navigation: Object,
  handleSnackbarUpdate: Function,
};

export const LoginPanel = ({ handleSnackbarUpdate, navigation }: Props) => (
  <View style={styles.internalContainer}>
    <LoginForm handleSnackbarUpdate={handleSnackbarUpdate} navigation={navigation} />
  </View>
);
export default LoginPanel;
