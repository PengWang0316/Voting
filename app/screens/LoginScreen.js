import React, { Component } from 'react';
import SnackBar from '@kevinwang0316/react-native-snackbar-component';

import SafeAreaScreen from './SafeAreaScreen';
import LoginPanel from '../components/LoginPanel';
// import LoginScreenContext from '../contexts/LoginScreenContext';

type Props = {
  navigation: Object,
};

type States = {
  isShowSnackbar: boolean,
  snackbarMessage: string,
  snackbarBgColor: string,
  isShowRegisterPanel: boolean,
};

const AUTO_HIDDING_TIME = 1500;

/**
 * The component that contains login form and register form.
 */
export class LoginScreen extends Component<Props, States> {
  state = {
    isShowSnackbar: false,
    snackbarMessage: '',
    snackbarBgColor: '',
  };

  /**
   * Updating the states that relates to the snackbar.
   * @param {object} snackbarStates contains isShowSnackbar, snackbarMessage, and snackbarBgColor.
   * @return {null} No return.
   */
  snackbarUpdateCallback = snackbarStates => this.setState(
    snackbarStates,
    () => setTimeout(() => this.setState({ isShowSnackbar: false }), AUTO_HIDDING_TIME + 100),
  );

  /**
   * Render function for the component.
   * @return {jsx} Return jsx.
   */
  render() {
    const {
      isShowSnackbar, snackbarMessage, snackbarBgColor,
    } = this.state;
    const { navigation } = this.props;
    return (
      <SafeAreaScreen>
        <LoginPanel handleSnackbarUpdate={this.snackbarUpdateCallback} navigation={navigation} />
        <SnackBar
          visible={isShowSnackbar}
          textMessage={snackbarMessage}
          backgroundColor={snackbarBgColor}
          autoHidingTime={AUTO_HIDDING_TIME}
        />
      </SafeAreaScreen>
    );
  }
}

export default LoginScreen;
