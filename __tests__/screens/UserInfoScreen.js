import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { UserInfoScreen } from '../../app/screens/UserInfoScreen';

jest.mock('react-native-elements', () => ({
  Button: () => 'Button',
  Avatar: () => 'Avatar',
}));
jest.mock('../../app/screens/SafeAreaScreen', () => 'SafeAreaScreen');

describe('UserInfoScreen', () => {
  const defaultProps = {
    user: {
      displayName: 'displayName',
      avatar: 'avatarUrl',
    },
    navigation: {
      goBack: jest.fn(),
    },
    logout: jest.fn(),
  };
  const getShallowComponent = (props = defaultProps) => shallow(<UserInfoScreen {...props} />);

  test('click closeBtn', () => {
    const component = getShallowComponent();
    component.find('Button').at(1).simulate('press');

    expect(defaultProps.navigation.goBack).toHaveBeenCalledTimes(1);
  });

  test('click logoutBtn', () => {
    const component = getShallowComponent();
    component.find('Button').at(0).simulate('press');

    expect(defaultProps.logout).toHaveBeenCalledTimes(1);
    expect(defaultProps.navigation.goBack).toHaveBeenCalledTimes(2);
  });

  test('Snapshot', () => expect(renderer.create(<UserInfoScreen {...defaultProps} />).toJSON()).toMatchSnapshot());
});
