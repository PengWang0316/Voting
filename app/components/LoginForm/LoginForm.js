import React, { Component, Fragment } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Input, Icon, Button } from 'react-native-elements';

import { loginWithPassword, emptyUser } from '../../actions/UserActions';
// import LoginScreenContext from '../../contexts/LoginScreenContext';
import styles from './Styles';

type Props = {
  user: Object,
  loginWithPassword: Function,
  emptyUser: Function,
  handleSnackbarUpdate: Function,
  navigation: Object,
};

type States = {
  username: string,
  password: string,
  isReady: boolean,
  isError: boolean,
  loginWithPassword: Function,
  user: Object,
};

const LOGIN_FAIL_MESSAGE = 'Wrong username or password';
const COLOR_ERROR = '#ff1744';

/**
 * The login form component.
 */
export class LoginForm extends Component<Props, States> {
  state = {
    username: '',
    password: '',
    isReady: false,
    isSubmitted: false,
  };

  /**
   * Call the onToggleSnackbar when isSubmitted state is true and props received a null for user.
   * @param {object} nextProps contains the new props value.
   * @param {object} prevState contains the previous state's value.
   * @return {Object} Return an object to change the state.
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.isSubmitted && nextProps.user.isFail) {
      nextProps.handleSnackbarUpdate({
        isShowSnackbar: true, snackbarMessage: LOGIN_FAIL_MESSAGE, snackbarBgColor: COLOR_ERROR,
      });
      nextProps.emptyUser(); // Reset user state to an empty object. So, next time the back-end code still can send a isFail mark when the authentication fails.
      return { isSubmitted: false };
    }
    if (prevState.isSubmitted && nextProps.user._id) nextProps.navigation.goBack();
    return null;
  }

  /**
   * Call the backend to validate login information.
   * @return {null} No return.
   */
  handleLoginClick = () => this.setState(
    { isSubmitted: true },
    () => this.props.loginWithPassword({
      username: this.state.username,
      password: this.state.password,
    }),
  );

  /**
   * Update the username and isReady state when a user type in the text input.
   * @param {string} text is the string a user is typing.
   * @return {null} No return.
   */
  handleUsernameTextChange = text => this.setState(({ password }) => ({
    username: text,
    isReady: text.length !== 0 && password.length !== 0,
  }));

  /**
   * Update the password and isReady state when a user type in the text input.
   * @param {string} text is the string a user is typing.
   * @return {null} No return.
   */
  handlePasswordTextChange = text => this.setState(({ username }) => ({
    password: text,
    isReady: text.length !== 0 && username.length !== 0,
  }));

  /**
   * The render method for the component.
   * @return {jsx} Return jsx for the component.
   */
  render() {
    const {
      username, password, isReady, isSubmitted,
    } = this.state;

    return (
      <Fragment>

        <View>
          <Text style={styles.title}>Username Login</Text>
        </View>

        <View>
          <Input
            onChangeText={this.handleUsernameTextChange}
            placeholder="Username"
            value={username}
            leftIcon={(
              <Icon
                type="font-awesome"
                name="user-o"
                size={18}
                color="gray"
              />
            )}
          />
        </View>

        <View>
          <Input
            onChangeText={this.handlePasswordTextChange}
            value={password}
            secureTextEntry
            placeholder="Password"
            leftIcon={(
              <Icon
                type="feather"
                name="lock"
                size={18}
                color="gray"
              />
            )}
          />
        </View>

        <View style={styles.buttonView}>
          <Button
            disabled={isSubmitted || !isReady}
            title="LOGIN"
            onPress={this.handleLoginClick}
            buttonStyle={styles.loginBtn}
          />
        </View>

      </Fragment>
    );
  }
}
/* istanbul ignore next */
const mapStateToProps = state => ({ user: state.user });

/* istanbul ignore next */
const mapDispatchToProprs = dispatch => ({
  loginWithPassword: params => dispatch(loginWithPassword(params)),
  emptyUser: () => dispatch(emptyUser()),
});
export default connect(mapStateToProps, mapDispatchToProprs)(LoginForm);
